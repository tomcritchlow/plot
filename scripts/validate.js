#!/usr/bin/env node
/**
 * Validate the canonical Markdown corpus.
 *
 * Errors (exit 1): unparseable frontmatter, missing required capture fields,
 * unknown capture types, unparseable created_at, broken internal links,
 * duplicate capture ids.
 *
 * Warnings (exit 0): id convention mismatches, links/quotes without a url,
 * captures outside the captures/YYYY/MM/ layout.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { scanRepo } from "./lib/scan.js";
import { extractInternalLinks } from "./lib/backlinks.js";

export const CAPTURE_TYPES = ["thought", "link", "quote"];
const CAPTURE_ID = /^cap-\d{8}-\d{6}-[a-z0-9][a-z0-9-]*$/;
const CAPTURE_PATH = /^captures\/\d{4}\/\d{2}\/[^/]+\.md$/;

export function validateRepo(root) {
  const errors = [];
  const warnings = [];
  const records = scanRepo(root);
  const captureIds = new Map();

  for (const record of records) {
    const { file } = record;
    if (record.error) {
      errors.push(`${file}: frontmatter does not parse (${record.error})`);
      continue;
    }
    const { data, body } = record;

    if (file.startsWith("captures/")) {
      for (const field of ["id", "type", "created_at"]) {
        if (!data[field]) errors.push(`${file}: missing required field "${field}"`);
      }
      if (data.type && !CAPTURE_TYPES.includes(data.type)) {
        errors.push(`${file}: unknown capture type "${data.type}"`);
      }
      if (data.created_at && Number.isNaN(Date.parse(data.created_at))) {
        errors.push(`${file}: created_at "${data.created_at}" is not a parseable date`);
      }
      if (data.id) {
        if (captureIds.has(data.id)) {
          errors.push(`${file}: duplicate capture id "${data.id}" (also in ${captureIds.get(data.id)})`);
        } else {
          captureIds.set(data.id, file);
        }
        if (!CAPTURE_ID.test(data.id)) {
          warnings.push(`${file}: id "${data.id}" doesn't match cap-YYYYMMDD-HHMMSS-slug`);
        }
      }
      if ((data.type === "link" || data.type === "quote") && !data.url) {
        warnings.push(`${file}: ${data.type} capture has no url`);
      }
      if (!CAPTURE_PATH.test(file)) {
        warnings.push(`${file}: expected captures/YYYY/MM/<name>.md layout`);
      }
    }

    if (file.startsWith("seeds/")) {
      if (!data.id) errors.push(`${file}: seed is missing required field "id"`);
      if (!data.status) warnings.push(`${file}: seed has no status`);
    }

    if (file.startsWith("published/") && !data.title) {
      warnings.push(`${file}: published piece has no title`);
    }

    if (/^drafts\/[^/]+\/README\.md$/.test(file) && !data.title) {
      errors.push(`${file}: draft README is missing required field "title"`);
    }

    for (const target of extractInternalLinks(file, body)) {
      if (!existsSync(join(root, target))) {
        errors.push(`${file}: broken internal link to ${target}`);
      }
    }
  }

  return { errors, warnings, fileCount: records.length };
}

import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const root = process.cwd();
  const { errors, warnings, fileCount } = validateRepo(root);
  for (const warning of warnings) console.log(`warning: ${warning}`);
  for (const error of errors) console.error(`error: ${error}`);
  console.log(`\nchecked ${fileCount} files: ${errors.length} errors, ${warnings.length} warnings`);
  if (errors.length > 0) process.exit(1);
}
