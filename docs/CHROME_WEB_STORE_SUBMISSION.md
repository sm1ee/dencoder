# Chrome Web Store Submission

This document contains the final copy and checklist for publishing `dencoder` to the Chrome Web Store.

## Store Listing

Use these values in the Chrome Web Store dashboard.

### Name

`dencoder`

### Category

`Developer Tools`

### Language

`English (United States)`

### Short description

`Developer Chrome extension for hashing, encoding, ciphers, JWT, JSON, networking, and conversion tools.`

### Detailed description

`dencoder is a local-first Chrome extension for developers who need quick conversion and inspection tools without leaving the browser. It includes hashes, HMAC, CRC, text encoders and decoders, ciphers, JWT inspection, JSON formatting, Morse conversion, IP and subnet helpers, time and number conversions, and password strength analysis. All processing happens locally inside the extension popup or tab view.`

### Website

`https://github.com/sm1ee/dencoder`

### Support URL

`https://github.com/sm1ee/dencoder/issues`

### Default locale keywords / topics

`chrome extension developer tools hashing encoding decoding jwt json cryptography cipher converter`

## Privacy Tab

Use the following answers if the extension behavior stays unchanged.

### Single purpose

`dencoder is a local-only developer toolbox for hashes, encodings, ciphers, JWT, JSON, networking, and data conversions.`

### Permission justification

- `clipboardWrite`: Lets the user copy generated output from the extension.

### Remote code

`No. All executable code is packaged inside the extension bundle.`

### User data collection

- Collected data: `None`
- Sold data: `No`
- Used for authentication: `No`
- Used for advertising: `No`
- Used for personalization: `No`
- Used for analytics: `No`
- User-entered content is processed locally in the browser only

### Privacy policy URL

Host [privacy-policy.html](/Users/bugclaw/.openclaw/workspace/dencoder/docs/privacy-policy.html#L1) on a public HTTPS URL and paste that URL into the dashboard.

The markdown source version is [PRIVACY_POLICY.md](/Users/bugclaw/.openclaw/workspace/dencoder/docs/PRIVACY_POLICY.md#L1).

## Test Instructions

Paste this into the `Test instructions` field.

`No login is required. Open the extension popup from the Chrome toolbar. Switch between tabs such as Hash, Encode, JWT, JSON, and Net, then enter sample text to verify results update immediately. Click Open Tab to verify the larger tab view. Open About to verify project information and source links.`

## Store Assets

Prepared assets:

- Small promo tile: [small-promo-tile-440x280.png](/Users/bugclaw/.openclaw/workspace/dencoder/store-assets/small-promo-tile-440x280.png)
- Popup screenshot: [screenshot-popup-hash-1280x800.png](/Users/bugclaw/.openclaw/workspace/dencoder/store-assets/screenshot-popup-hash-1280x800.png)
- Tab screenshot: [screenshot-tab-jwt-1280x800.png](/Users/bugclaw/.openclaw/workspace/dencoder/store-assets/screenshot-tab-jwt-1280x800.png)
- About screenshot: [screenshot-about-1280x800.png](/Users/bugclaw/.openclaw/workspace/dencoder/store-assets/screenshot-about-1280x800.png)

Extension icon files:

- [icon16.png](/Users/bugclaw/.openclaw/workspace/dencoder/images/icon16.png)
- [icon32.png](/Users/bugclaw/.openclaw/workspace/dencoder/images/icon32.png)
- [icon48.png](/Users/bugclaw/.openclaw/workspace/dencoder/images/icon48.png)
- [icon128.png](/Users/bugclaw/.openclaw/workspace/dencoder/images/icon128.png)

## Submission Checklist

1. Confirm the repository metadata is correct in GitHub.
2. Publish [privacy-policy.html](/Users/bugclaw/.openclaw/workspace/dencoder/docs/privacy-policy.html#L1) at a public HTTPS URL.
3. Run `npm test`.
4. Run `npm run package`.
5. Upload [dist/dencoder-0.1.0.zip](/Users/bugclaw/.openclaw/workspace/dencoder/dist/dencoder-0.1.0.zip).
6. Fill Store Listing fields with the copy above.
7. Upload the prepared screenshots and promo tile.
8. Fill Privacy answers with the values above.
9. Submit for review.

## Notes

- Increase `manifest.json` version before each new store upload.
- Keep permissions minimal. If a permission is not essential, remove it before release.
- Rebuild the ZIP after any icon, manifest, or UI change.
