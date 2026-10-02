import test from "node:test";
import assert from "node:assert/strict";
import { classifyMetric, summarizeProject } from "./index.js";

test("classifies metrics", () => {
  assert.equal(classifyMetric(95), "excellent");
  assert.equal(classifyMetric(75), "healthy");
  assert.equal(classifyMetric(40), "needs-review");
});

test("summarizes a project", () => {
  assert.equal(summarizeProject({ name: "Autoscan E2E", coverage: 91 }), "Autoscan E2E: excellent");
});
