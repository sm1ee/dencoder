import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const ROOT = "/Users/bugclaw/.openclaw/workspace/dencoder";

function loadGlobalScript(relativePath, exportName) {
  const source = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  const context = {
    TextEncoder,
    TextDecoder,
    atob,
    btoa,
    console,
  };

  vm.runInNewContext(`${source}\nthis.__exported = ${exportName};`, context, {
    filename: relativePath,
  });

  return context.__exported;
}

test("custom-jwt encode and decode work", () => {
  const customjwt = loadGlobalScript("lib/custom-jwt.js", "customjwt");
  const encoded = customjwt.encode(
    '{"alg":"HS256","typ":"JWT"}{"sub":"123","name":"John Doe"}.sig',
  );

  assert.equal(
    encoded,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiSm9obiBEb2UifQ.sig",
  );

  const decoded = customjwt.decode(encoded);
  assert.match(decoded, /"alg": "HS256"/);
  assert.match(decoded, /"name": "John Doe"/);
});

test("custom-jwt mutation helpers still work", () => {
  const customjwt = loadGlobalScript("lib/custom-jwt.js", "customjwt");
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMifQ.signature";

  const noneToken = customjwt.none(token);
  const jkuToken = customjwt.JKU(token, "https://attacker.example/jwks.json");
  const kidToken = customjwt.KID(token, "../../dev/null");

  assert.match(customjwt.decode(noneToken), /"alg": "none"/);
  assert.match(
    customjwt.decode(jkuToken),
    /"jku": "https:\/\/attacker\.example\/jwks\.json"/,
  );
  assert.match(customjwt.decode(kidToken), /"kid": "\.\.\/\.\.\/dev\/null"/);
});

test("custom-json beautifiers still work", () => {
  const customJson = loadGlobalScript("lib/custom-json.js", "customJson");
  const json = customJson.jsonBeautifier('{"a":1,"b":{"c":2}}');
  const dict = customJson.dictBeautifier("{'a': 1, 'b': {'c': 'x'}}");

  assert.match(json, /\n  "b": \{/);
  assert.match(dict, /'c': 'x'/);
});

test("popup asset references resolve to existing files", () => {
  const popupHtml = fs.readFileSync(path.join(ROOT, "popup.html"), "utf8");
  const references = [...popupHtml.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((ref) => !ref.startsWith("http") && !ref.startsWith("#") && ref !== "");

  for (const reference of references) {
    assert.equal(
      fs.existsSync(path.join(ROOT, reference)),
      true,
      `Missing popup asset: ${reference}`,
    );
  }
});

test("manifest stays aligned with store-ready metadata", () => {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"),
  );

  assert.equal(manifest.manifest_version, 3);
  assert.deepEqual(manifest.permissions, ["clipboardWrite"]);
  assert.equal(manifest.homepage_url, "https://github.com/sm1ee/dencoder");
});
