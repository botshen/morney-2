#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:botshen/morney-2-website.git &&
git push -u origin master -f
cd -
echo https://botshen.github.io/morney-2-website/index.html