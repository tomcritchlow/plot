/** Query parameters that are tracking noise, not identity. */
const TRACKING_PARAMS = /^(utm_|fbclid$|gclid$|mc_cid$|mc_eid$|ref_src$)/;

/**
 * Normalize a URL into a deduplication key.
 *
 * Lowercases the host, drops the fragment and tracking parameters, sorts the
 * remaining query parameters, and strips a trailing slash from non-root
 * paths. Returns null for anything that isn't http(s).
 */
export function normalizeUrl(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  url.hash = "";
  url.hostname = url.hostname.toLowerCase();
  const params = [...url.searchParams.entries()]
    .filter(([key]) => !TRACKING_PARAMS.test(key))
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  url.search = "";
  for (const [key, value] of params) url.searchParams.append(key, value);
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.toString();
}

const URL_PATTERN = /https?:\/\/[^\s)\]>"'`]+/g;

/**
 * Extract every external URL from a Markdown body: link destinations,
 * autolinks, and bare URLs. Trailing punctuation is trimmed. Returns
 * original (un-normalized) URL strings in order of appearance, deduplicated.
 */
export function extractUrls(body) {
  const seen = new Set();
  const urls = [];
  for (const match of body.matchAll(URL_PATTERN)) {
    let url = match[0].replace(/[.,;:!?]+$/, "");
    if (!seen.has(url)) {
      seen.add(url);
      urls.push(url);
    }
  }
  return urls;
}
