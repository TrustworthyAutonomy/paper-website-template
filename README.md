# Paper Website Template

Simple academic project page (title → authors → links → overview → citation), similar in spirit to pages like [X-VLA](https://thu-air-dream.github.io/X-VLA/).

## Customize

Edit `js/config.js` only.

## Push template (once)

```powershell
cd F:\websites\paper-website-template
git add .
git commit -m "Simplify to academic project page layout"
git push
```

Mark the GitHub repo as a **Template repository** in Settings.

## New paper from template

```powershell
gh repo create TrustworthyAutonomy/PaperName --public --template TrustworthyAutonomy/paper-website-template
```
