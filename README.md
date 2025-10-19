# Author Site (Vite + React + Tailwind)

**Live build via GitHub Pages + Actions.**

## Quick Web Upload (no terminal)
1. Create a new GitHub repo named **author-site** (or any name—if different, edit `vite.config.js` base path).
2. Click **Add file → Upload files**. Drag everything from this zip’s root.
3. Commit the upload.
4. Go to **Settings → Pages** → set **Source** to **GitHub Actions**. Wait for the workflow to finish.
5. Your site will be at: `https://<your-username>.github.io/<repo>/`

### Update the base path if you use a different repo name
Open `vite.config.js` and change:
```js
base: '/author-site/'
```
to
```js
base: '/<your-repo-name>/'
```

### Where to update content
- Home/book text & sections: `src/App.jsx`
- Cover image: replace `src/cover.jpg`
- Amazon link: edit `AMAZON_URL` in `src/App.jsx`
- Praise blurbs: edit `BLURBS` in `src/App.jsx`
- Sample PDF: replace `public/sample.pdf`
- Press kit: replace `public/press-kit.zip`
