#!/bin/bash

GH_REPO="@github.com/benburwell/sfstatus.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

npm run build

cd dist
git init
git config user.name "Travis CI"
git config user.email "travis@benburwell.com"
git add .
git commit -m "Travis CI Deploy"
git push --force --quiet $FULL_REPO master:gh-pages

