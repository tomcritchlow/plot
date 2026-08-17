import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});
turndown.remove(["script", "style", "nav", "header", "footer", "iframe", "form"]);

/** Convert an HTML fragment to Markdown. */
export function htmlToMarkdown(html) {
  return turndown.turndown(html).trim();
}

/**
 * Rewrite relative href/src attributes to absolute URLs against a page's
 * canonical URL, so imported Markdown never contains site-relative links
 * that would read as (broken) repo-internal links.
 */
export function absolutizeHtmlUrls(html, baseUrl) {
  if (!baseUrl) return html;
  return html.replace(/(href|src)=("|')([^"']+)\2/gi, (match, attr, quote, value) => {
    try {
      return `${attr}=${quote}${new URL(value, baseUrl)}${quote}`;
    } catch {
      return match;
    }
  });
}

/**
 * Given a match for an opening tag, return the inner HTML up to its matching
 * close tag, balancing nested same-name tags (regexes alone can't do this,
 * and real post containers are nested divs).
 */
function extractBalanced(html, openMatch, tagName) {
  const start = openMatch.index + openMatch[0].length;
  const tokens = new RegExp(`<${tagName}\\b[^>]*>|</${tagName}\\s*>`, "gi");
  tokens.lastIndex = start;
  let depth = 1;
  let token;
  while ((token = tokens.exec(html))) {
    depth += token[0][1] === "/" ? -1 : 1;
    if (depth === 0) return html.slice(start, token.index);
  }
  return null;
}

const CONTENT_CANDIDATES = [
  /<article\b[^>]*>/i,
  /<main\b[^>]*>/i,
  // Specific content-container names first, generic "content" last.
  /<div[^>]*(?:class|id)="[^"]*(?:post-content|entry-content|article-body|postcontainer|blog-post|post-body)[^"]*"[^>]*>/i,
  /<div[^>]*(?:class|id)="[^"]*content[^"]*"[^>]*>/i,
];

/**
 * Best-effort extraction of the main content region from a full HTML page.
 * Tries <article>, <main>, then content-looking <div>s. Returns an HTML
 * fragment or null. Deliberately crude — failure here should never block an
 * import; callers fall back to the feed's own content.
 */
export function extractMainContent(html) {
  for (const pattern of CONTENT_CANDIDATES) {
    const open = pattern.exec(html);
    if (!open) continue;
    const tagName = /^<([a-z]+)/i.exec(open[0])[1];
    const inner = extractBalanced(html, open, tagName);
    if (inner && inner.trim().length > 200) return inner;
  }
  return null;
}
