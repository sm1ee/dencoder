#!/bin/sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
DIST_DIR="$ROOT_DIR/dist"
VERSION=$(node --input-type=module -e "import { readFileSync } from 'node:fs'; console.log(JSON.parse(readFileSync('manifest.json', 'utf8')).version);")
ARCHIVE_NAME="dencoder-${VERSION}.zip"
ARCHIVE_PATH="$DIST_DIR/$ARCHIVE_NAME"

mkdir -p "$DIST_DIR"
rm -f "$ARCHIVE_PATH"

cd "$ROOT_DIR"

zip -r "$ARCHIVE_PATH" \
  manifest.json \
  popup.html \
  popup.js \
  hasher.js \
  main.css \
  images \
  lib \
  -x "*.DS_Store"

printf 'Created %s\n' "$ARCHIVE_PATH"
