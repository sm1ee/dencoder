# Chrome Web Store Submission

This file captures the reviewer-facing information needed to submit `dencoder` to the Chrome Web Store.

## Why this file exists

Chrome's publishing and privacy guidance requires:

- a clear single purpose
- minimum necessary permissions
- no remotely hosted executable code
- a ZIP upload with `manifest.json` at the root
- accurate Store Listing and Privacy answers

## Current codebase status

- Manifest V3: yes
- ZIP packaging script: yes, run `npm run package`
- Remote hosted executable code: none intended
- Permissions currently requested: `clipboardWrite`
- Homepage URL set in manifest: yes
- Extension icons present: yes
- Screenshots for store listing: still needed manually

## Single purpose

Suggested Chrome Web Store single purpose text:

`dencoder is an offline developer toolbox for hashing, encoding, decoding, payload inspection, and related text or network conversions.`

This is intentionally narrower than "all-in-one security tool" wording and aligns better with Chrome's single-purpose guidance.

## Permissions justification

Use this in the Privacy tab:

- `clipboardWrite`: Allows the extension to copy generated output to the clipboard only when the user explicitly clicks a result.

## Remote code declaration

Use this in the Privacy tab:

`No, I am not using remote code. All executable code is bundled inside the extension package.`

## Data usage disclosure

Use this in the Privacy tab if behavior remains unchanged:

- Collected data: none
- Sold data: no
- Used for authentication: no
- Used for advertising: no
- Used for personalization: no
- Used for analytics: no
- User text is processed locally in the browser only

## Privacy policy

Draft policy text lives in [docs/PRIVACY_POLICY.md](/Users/bugclaw/.openclaw/workspace/dencoder/docs/PRIVACY_POLICY.md).

Before submitting:

1. Host the privacy policy on a public HTTPS URL.
2. Paste that URL into the Developer Dashboard privacy policy field.
3. Ensure the hosted policy matches the privacy disclosures exactly.

## Store listing copy

Suggested short description:

`Offline developer toolbox for hashes, encoding, JWT/JSON inspection, and network or text conversions.`

Suggested longer description:

`dencoder is a local-first Chrome extension for common developer conversions and payload inspection. It provides hashes, HMAC, CRC, ciphers, Base64/Base32/Base45/Base58 helpers, JWT and JSON tools, Morse conversion, IP/network calculations, time and number conversions, and password strength analysis. All processing runs locally in the browser.`

## Manual submission checklist

1. Run `npm test`
2. Run `npm run package`
3. Upload `dist/dencoder-<version>.zip`
4. Fill out Store Listing fields with accurate title, description, category, support URL, and screenshots
5. Fill out Privacy fields using the text above
6. Add the hosted privacy policy URL
7. Confirm that screenshots and listing text match actual behavior
8. Submit for review

## Notes for future updates

- Increase the manifest `version` before every upload
- Keep permissions minimal; if a permission is not essential, remove it before release
- Re-check the packaged artifact for remote URLs if new dependencies are added
