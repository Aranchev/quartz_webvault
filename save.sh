#!/bin/bash
set -e

# Commit + push private submodule if it has changes
cd content/private
if [[ -n $(git status --porcelain) ]]; then
    git add .
    git commit -m "${1:-update private notes}"
    git push
    cd ../..
    git add content/private
    echo "Private submodule updated."
else
    cd ../..
fi

# Commit + push root if it has changes
if [[ -n $(git status --porcelain) ]]; then
    git add .
    git commit -m "${1:-update site}"
    git push
else
    echo "Nothing to commit in root."
fi
