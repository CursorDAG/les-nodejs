@echo off
git add .
:: git commit -m "update "
git commit -m "Update next files: " && git diff --name-only HEAD^ HEAD
git push origin master