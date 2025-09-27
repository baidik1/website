# My GitHub Website


This is a small static website scaffold. To preview locally, just open `index.html` in your browser.


## Publish to GitHub Pages (quick)


1. Create a repository on GitHub (public or private).
2. Push these files to the repository.
3. In the repo Settings -> Pages, choose branch `main` (or `gh-pages`) and `/ (root)` folder. Save.
4. After a minute, your site will be available at `https://<username>.github.io/<repo>` (or `https://<username>.github.io` for a repo named `<username>.github.io`).


## Quick git commands


```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
# replace URL with your repo
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
