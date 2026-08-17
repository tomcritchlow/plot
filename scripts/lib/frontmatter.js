import { parse as parseYaml } from "yaml";

/**
 * Split a Markdown document into YAML frontmatter and body.
 *
 * Returns { data, body, hasFrontmatter }. If the file has no frontmatter
 * block, data is {} and body is the whole file. Throws if the frontmatter
 * block exists but is not valid YAML.
 */
export function parseFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) {
    return { data: {}, body: text, hasFrontmatter: false };
  }
  const data = parseYaml(match[1]) ?? {};
  if (typeof data !== "object" || Array.isArray(data)) {
    throw new Error("frontmatter is not a YAML mapping");
  }
  return { data, body: text.slice(match[0].length), hasFrontmatter: true };
}

/** Serialize a value for frontmatter, quoting only when YAML requires it. */
function yamlScalar(value) {
  if (value === null || value === undefined) return "";
  const s = String(value);
  if (/^[\w./:+-]+$/.test(s) && !/^[-?:]/.test(s)) return s;
  return JSON.stringify(s);
}

/**
 * Build a Markdown document from a flat frontmatter object and a body.
 * Array values become YAML block lists. Undefined/null values are omitted.
 */
export function stringifyFrontmatter(data, body) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${key}: []`);
      } else {
        lines.push(`${key}:`);
        for (const item of value) lines.push(`  - ${yamlScalar(item)}`);
      }
    } else {
      lines.push(`${key}: ${yamlScalar(value)}`);
    }
  }
  lines.push("---", "");
  return lines.join("\n") + body;
}
