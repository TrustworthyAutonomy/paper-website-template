# Site assets (committed)

Suggested layout:

```
sources/
  fig1.svg              # optional framework / teaser
  poster.svg            # conference poster (from poster.pdf via pdftocairo)
  exp/                  # experiment panels / result images
    a.png
    b.png
  videos/               # failure-case or demo videos
    demo_a.mp4
```

Notes:

- Keep paper TeX under `tex/` (gitignored); export figures into `sources/` for the live site.
- Poster: no Figure caption on the page (use `.poster-figure`).
- Prefer SVG for diagrams/posters when possible.
