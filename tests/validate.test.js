import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { validateRepo } from "../scripts/validate.js";

const fixtures = join(dirname(fileURLToPath(import.meta.url)), "fixtures");

test("valid fixture repo produces no errors", () => {
  const { errors, warnings } = validateRepo(join(fixtures, "valid-repo"));
  assert.deepEqual(errors, []);
  assert.deepEqual(warnings, []);
});

test("invalid fixture repo reports each problem", () => {
  const { errors } = validateRepo(join(fixtures, "invalid-repo"));
  const all = errors.join("\n");
  assert.match(all, /malformed\.md: frontmatter does not parse/);
  assert.match(all, /missing-fields\.md: missing required field "type"/);
  assert.match(all, /missing-fields\.md: missing required field "created_at"/);
  assert.match(all, /bad-type\.md: unknown capture type "musing"/);
  assert.match(all, /broken-link\.md: broken internal link to seeds\/does-not-exist\.md/);
  assert.match(all, /dupe-b\.md: duplicate capture id/);
  assert.equal(errors.length, 6);
});

test("the real repository validates cleanly", () => {
  const root = join(fixtures, "..", "..");
  const { errors } = validateRepo(root);
  assert.deepEqual(errors, []);
});
