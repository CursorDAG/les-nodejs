@echo off
git add .
:: git commit -m "update "
git commit -m "Обновления произошли в следующих файлах: " && git diff --name-only HEAD^ HEAD
git push origin master