import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { parseFrontmatter } from "./frontmatter.js";

/** The directories that hold canonical Markdown. Everything else is derived. */
export const CANONICAL_DIRS = ["captures", "seeds", "drafts", "published"];

/** Recursively list Markdown files under dir, as repo-relative posix paths. */
export function listMarkdownFiles(root, dir) {
  const abs = join(root, dir);
  let entries;
  try {
    entries = readdirSync(abs);
  } catch {
    return [];
  }
  const files = [];
  for (const entry of entries.sort()) {
    if (entry.startsWith(".")) continue;
    const entryAbs = join(abs, entry);
    const entryRel = `${dir}/${entry}`;
    if (statSync(entryAbs).isDirectory()) {
      files.push(...listMarkdownFiles(root, entryRel));
    } else if (entry.endsWith(".md")) {
      files.push(entryRel);
    }
  }
  return files;
}

/**
 * Read every canonical Markdown file in the repo.
 *
 * Returns records of { file, data, body, error } sorted by path, where
 * `file` is repo-relative. Files whose frontmatter fails to parse get an
 * `error` string instead of data/body so callers can report rather than crash.
 */
export function scanRepo(root) {
  const records = [];
  for (const dir of CANONICAL_DIRS) {
    for (const file of listMarkdownFiles(root, dir)) {
      const text = readFileSync(join(root, file), "utf8");
      try {
        const { data, body, hasFrontmatter } = parseFrontmatter(text);
        records.push({ file, data, body, hasFrontmatter });
      } catch (err) {
        records.push({ file, error: err.message });
      }
    }
  }
  records.sort((a, b) => (a.file < b.file ? -1 : 1));
  return records;
}

/** Repo-relative path helper that always produces posix separators. */
export function toRepoPath(root, absPath) {
  return relative(root, absPath).split("\\").join("/");
}
