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
 * Best-effort extraction of the main content region from a full HTML page.
 * Tries <article>, then <main>, then the largest content-looking <div>.
 * Returns an HTML fragment or null. Deliberately crude — failure here should
 * never block an import; callers fall back to the feed's own content.
 */
export function extractMainContent(html) {
  for (const tag of ["article", "main"]) {
    const match = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(html);
    if (match && match[1].trim().length > 200) return match[1];
  }
  const contentDiv =
    /<div[^>]*(?:class|id)="[^"]*(?:post-content|entry-content|article-body|content)[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(
      html
    );
  if (contentDiv && contentDiv[1].trim().length > 200) return contentDiv[1];
  return null;
}
