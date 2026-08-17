import { posix } from "node:path";

const MD_LINK = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

/**
 * Extract internal Markdown link targets from a body, resolved to
 * repo-relative paths. `fromFile` is the repo-relative path of the file the
 * body came from; relative links are resolved against its directory.
 * External links, anchors, and mailto links are ignored.
 */
export function extractInternalLinks(fromFile, body) {
  const dir = posix.dirname(fromFile);
  const targets = [];
  const seen = new Set();
  for (const match of body.matchAll(MD_LINK)) {
    const raw = match[1];
    if (/^[a-z][a-z0-9+.-]*:/i.test(raw)) continue; // http:, mailto:, etc.
    if (raw.startsWith("#")) continue;
    const withoutAnchor = raw.split("#")[0];
    if (!withoutAnchor) continue;
    const resolved = raw.startsWith("/")
      ? withoutAnchor.slice(1)
      : posix.normalize(posix.join(dir, withoutAnchor));
    if (resolved.startsWith("..")) continue; // points outside the repo
    if (!seen.has(resolved)) {
      seen.add(resolved);
      targets.push(resolved);
    }
  }
  return targets;
}
