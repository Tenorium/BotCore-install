#!/bin/bash

rm -rf .git
git init
git remote -f add origin https://github.com/Tenorium/BotCore.git
git fetch origin
git checkout -f -b master --track origin/master
git reset origin/master
