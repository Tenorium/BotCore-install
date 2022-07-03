#!/bin/bash

rm -rf .git
git init
git remote add origin https://github.com/Tenorium/BotCore.git
git fetch origin
git clean -fd
git checkout -b master --track origin/master
git reset origin/master
