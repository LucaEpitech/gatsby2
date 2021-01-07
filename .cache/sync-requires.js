const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bianco/epitech/web/gatsby/Marx/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/bianco/epitech/web/gatsby/Marx/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bianco/epitech/web/gatsby/Marx/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bianco/epitech/web/gatsby/Marx/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/bianco/epitech/web/gatsby/Marx/src/pages/using-typescript.tsx")))
}

