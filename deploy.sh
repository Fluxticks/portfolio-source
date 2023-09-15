#!/bin/sh

rm -rf fluxticks.github.io
cp -r build fluxticks.github.io
MESSAGE="$(git log -1 --pretty=%B)"
cd fluxticks.github.io
git init
git remote add origin https://github.com/Fluxticks/fluxticks.github.io
git add --all
git commit -m "Last commit before deploy: $MESSAGE"
git push -u origin main --force