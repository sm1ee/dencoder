# dencoder

`dencoder` is a Chrome extension for developers who need quick encoding, decoding, hashing, cipher, JWT, JSON, networking, and conversion tools in one place.

Everything runs locally inside the extension. Your input is processed in the popup or tab view and is not sent to any external service.

## What You Can Do

- Generate hashes such as MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, RIPEMD-160, MD4, and Whirlpool
- Create HMAC values with MD5, SHA-1, SHA-2, RIPEMD-160, and MD4
- Work with CRC values including CRC-8, CRC-16, FCS-16, and CRC-32
- Encrypt and decrypt text with AES-256, DES, Triple DES, Rabbit, RC4, and RC4Drop
- Convert IP and subnet values for network calculations
- Convert between Unix time, local time, UTC, RFC-1123, and ISO 8601
- Convert numbers between decimal, hexadecimal, binary, and Roman numerals
- Convert strings between ASCII, UTF-8, UTF-16, and hex
- Encode and decode Base64, Base32, Base45, Base58, ROT13, URI, HTML entity, and Unicode values
- Inspect and edit JWT data locally
- Beautify and minify JSON
- Encode and decode Morse code
- Check password strength, score, and entropy

## How It Works

1. Open the extension popup from the Chrome toolbar.
2. Choose a tool category from the tabs at the top.
3. Paste or type your input.
4. Copy the generated result from the output fields.
5. Use `Open Tab` when you want a wider workspace.

## Privacy

- All processing happens locally in your browser
- No remote code is loaded
- No account or sign-in is required
- No user data is collected or transmitted by the extension
- Clipboard permission is only used so you can copy generated output

## Install

Install `dencoder` from the Chrome Web Store and pin it to your toolbar for quick access.

If you want to load it manually during development:

1. Open `chrome://extensions`
2. Enable Developer mode
3. Click `Load unpacked`
4. Select this folder

## Included Views

- Popup view for fast lookups and small tasks
- Tab view for longer inputs and larger result sets
- About view with project information and source link

## Project

- Homepage: [github.com/sm1ee/dencoder](https://github.com/sm1ee/dencoder)
- Manifest: [manifest.json](./manifest.json)
- Privacy policy draft: [docs/PRIVACY_POLICY.md](./docs/PRIVACY_POLICY.md)

## For Development

Run tests:

```bash
npm test
```

Create a release ZIP:

```bash
npm run package
```

Chrome Web Store submission notes:

- [docs/CHROME_WEB_STORE_SUBMISSION.md](./docs/CHROME_WEB_STORE_SUBMISSION.md)

## Credits

This project is based on [hasher](https://github.com/s12v/hasher).