#!/bin/bash

SRCROOT="$(cd "$(dirname "$0")/.." && pwd)"
DOCROOT="$(cd "$SRCROOT/../argo-docs" && pwd)"

cp -r $SRCROOT/content $SRCROOT/dist/docs && \
echo '[{ "version": "latest", "path": "/" }]' > $SRCROOT/dist/docs/versions.json && \
node ./scripts/index-docs.js
