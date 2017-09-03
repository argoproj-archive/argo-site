#!/bin/bash

SRCROOT="$(cd "$(dirname "$0")/.." && pwd)"
DOCROOT="$(cd "$SRCROOT/../argo-docs" && pwd)"

cp -r $DOCROOT/content $SRCROOT/dist/docs && \
cp -r $DOCROOT/images $SRCROOT/dist/docs/images && \
echo '[{ "version": "latest", "path": "/" }]' > $SRCROOT/dist/docs/versions.json && \
node ./scripts/index-docs.js
