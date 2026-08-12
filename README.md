# Paper Website Template

Project page template for a published paper (GitHub Pages).

## 1. Push this template to the org (once)

```powershell
cd F:\websites\paper-website-template

git init
git add .
git commit -m "Initial paper website template"
git branch -M main

gh repo create TrustworthyAutonomy/paper-website-template --public --source=. --remote=origin --push
```

Then on GitHub: repo **Settings** → check **Template repository**.

Also: **Settings → Pages → Source: GitHub Actions**.

## 2. Create a repo for each paper

```powershell
gh repo create TrustworthyAutonomy/DesignLatentSafetyFilter --public --template TrustworthyAutonomy/paper-website-template
```

Clone and edit:

```powershell
gh repo clone TrustworthyAutonomy/DesignLatentSafetyFilter
cd DesignLatentSafetyFilter
# edit js/config.js
git add .
git commit -m "Fill in paper details"
git push
```

Enable Pages on that paper repo too (**Settings → Pages → GitHub Actions**).

Site URL:

`https://trustworthyautonomy.github.io/DesignLatentSafetyFilter/`

## Customize

Edit only `js/config.js`: title, authors, venue, abstract, links, bibtex, hero image.
