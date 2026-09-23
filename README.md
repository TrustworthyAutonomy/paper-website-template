# Paper Website Template

Shared academic project-page template for [TrustworthyAutonomy](https://github.com/TrustworthyAutonomy) papers (Palatino typography, Bootstrap layout, GitHub Pages).

Live examples:

- https://trustworthyautonomy.github.io/LatentSafetyFilterWithPVRs/
- https://trustworthyautonomy.github.io/NeuralCBF-ICL/
- https://trustworthyautonomy.github.io/CCBF/
- https://trustworthyautonomy.github.io/LanguageConditionedHJ/

## Conventions

| Piece | Pattern |
| --- | --- |
| Title | `.text-title` + `.text-highlight` on key phrases |
| Section titles | `.section-heading` (Abstract, Experimental results, Citation, …) |
| Subsection titles | `.subsection-heading` (slightly smaller than section) |
| Buttons | Red **Paper** (arXiv PDF) + dark **Code** (or disabled “Code (coming soon)”) |
| Figures | `.figure-box` → auto **Figure N:** caption |
| Tables | `.table-box` + `.results-table` → auto **Table N:**; fit width, no horizontal scroll |
| Experiment panels | `.exp-grid.cols-2` / `.cols-3` with `(a)(b)…` panel labels |
| Videos | `.video-grid` under `sources/videos/` |
| Poster | `sources/poster.svg` in `.poster-figure` (**no** Figure caption); keep `poster.pdf` for download if useful |
| Assets | Site assets in `sources/`; keep paper TeX in `tex/` (gitignored) |

## Customize a paper

1. Copy this folder (or clone the template repo).
2. Edit `index.html`: title, authors, Paper/Code links, abstract, citation.
3. Add figures under `sources/` / `sources/exp/`, videos under `sources/videos/`.
4. For a poster: `pdftocairo -svg poster.pdf sources/poster` then rename to `poster.svg`, uncomment the Poster block.
5. Replace every `PAPER_*`, `AUTHOR_*`, `DATE_*`, `ARXIV_*`, and `REPOSITORY_*` SEO placeholder in `index.html`.
6. Replace `REPOSITORY_NAME` and `DATE_YYYY-MM-DD` in `robots.txt` and `sitemap.xml`.
7. Add the new paper, using its exact full title, to the publication directory at `TrustworthyAutonomy.github.io`.
8. Delete unused optional blocks (framework figure, experiments, videos, poster).

Use the exact title and author order from the paper everywhere: the HTML `<title>`, visible `<h1>`, citation metadata, JSON-LD, BibTeX, and publication directory. Use the paper's first public date for the publication date. Prefer a PNG or JPEG sharing image because social crawlers do not consistently render SVG previews.

## Push a new paper site

```powershell
cd F:\websites\YourPaperRepo
git init
git add .
git commit -m "Initial project page for arXiv XXXX.XXXXX"
git branch -M main
gh repo create TrustworthyAutonomy/YourPaperRepo --public --source=. --remote=origin --push
```

Then enable **Settings → Pages → Source: GitHub Actions**.

Site URL: `https://trustworthyautonomy.github.io/YourPaperRepo/`

After deployment, submit the page for recrawling and submit its sitemap in Google Search Console. These steps help discovery but do not guarantee a particular ranking.

## Update this template

```powershell
cd F:\websites\paper-website-template
git add .
git commit -m "Sync template with current paper-page conventions"
git push
```
