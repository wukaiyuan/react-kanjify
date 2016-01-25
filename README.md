# React Kanjify

Simple Chrome extension with React that takes simplified Chinese input and converts to Japanese kanji.

#### Should I run this on the server / in tests / in production?

No! This is only meant for client development environment. Make sure your `NODE_ENV` is neither `development` nor empty in these environments. Alternateively you can put the Babel configuration under a different `env` key and use your custom `NODE_ENV` or `BABEL_ENV` to turn these transforms on. Or you can [embed Babel configuration inside the Webpack config ](https://github.com/babel/babel-loader#options). No matter how you do it, **make sure you’re *only* running this transform in client-side development mode, and it is disabled on the server, in tests, and in production.**

#### My server is throwing a 404 after `npm run build`

Again, this boilerplate is **not** intended to be production ready. The 404 is because `index.html` is hard coded with the webpack bundle path in `/static/` (used by development server). You must manually update the script tag in `index.html` with the correct bundle path of `/dist/bundle.js` in order to use compiled source.
