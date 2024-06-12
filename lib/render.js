"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderList({ title, items, numbered }) {
    const o_u = numbered ? "o" : "u";
    return `<section>
    <h3 tabindex="1">${title}</h3>
    <${o_u}l> <li>${items.join("</li> <li>")}</li> </${o_u}l>
  </section>`;
}
function renderLists(lists) {
    return lists
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(renderList)
        .join(" ");
}
function renderPage(username, name, lists) {
    const title = `${name} | All My Favs`;
    const desc = `All the favs of * ${name} *`;
    const html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <meta name="description" content="${desc}" />
      <meta name="keywords" content="all,my,favs,faves,favorites,favourites,favorite,list,lists" />
      <meta name="author" content="David Hartsough" />
      <meta name="application-name" content="All My Favs" />
      <meta name="theme-color" content="#132535" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:url" content="https://all-my-favs.web.app/${username}" />
      <meta property="og:site_name" content="All My Favs" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/icon512.png" />
      <meta property="og:image:alt" content="All My Favs logo icon" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${desc}" />
      <meta name="twitter:image" content="/icon512.png" />
      <meta name="twitter:image:alt" content="All My Favs logo icon" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <link rel="icon" href="/icon16.png" type="image/png" sizes="16x16" />
      <link rel="icon" href="/icon32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/icon192.png" type="image/png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#132535" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="stylesheet" href="/base.css" />
      <style>nav{text-align:center;padding:.25rem}#logo-text{text-transform:uppercase;color:#fff;margin:auto;padding:.5rem 1rem;font-size:1.125rem;font-weight:600;line-height:1.5;text-decoration:none;display:inline-block}header{height:12rem}h1{letter-spacing:.025rem;text-shadow:0 0 .5rem #0006;margin-bottom:.125rem;font-size:2.125rem;font-weight:600;line-height:1}@media (width>25rem){h1{font-size:2.25rem}}@media (width>28rem){h1{font-size:2.5rem}}main{flex-wrap:wrap;align-items:start;padding:1rem;display:flex}@media (width<48rem){main{padding:0;display:block}}section{color:#fff;background-color:#e6e6e605;border:.5px solid #bfbfbf0a;border-radius:.25rem;flex:0 0 calc(50% - 2rem);margin:1rem;transition:background-color .3s,box-shadow .3s;overflow:hidden;box-shadow:0 0 .25rem .125rem #00000003}section:hover{background-color:#e6e6e60a;box-shadow:0 0 .375rem .25rem #00000008}h3{background-color:hsl(0deg 0 0%/0%);cursor:pointer;letter-spacing:.025rem;color:#f2f2f2f2;padding:1rem 1.25rem 1rem 1rem;font-size:1.25rem;font-weight:500;line-height:1;transition:background-color .2s,color .2s}h3:after{content:"❯";float:right;color:#f2f2f2cc;transition:transform .15s,color .2s;transform:rotate(90deg)scale(1)}.active{color:#fff;background-color:#00000008}h3.active:after{transform:rotate(90deg)scale(-1)}h3:hover,h3:focus{color:#fff;background-color:#80808008}h3:hover:after,h3:focus:after{color:#fff}ul,ol{max-height:0;margin:0;padding:0;list-style-image:none;transition:max-height .2s;overflow:hidden}li{border-top:.5px solid #7771;margin-bottom:0;line-height:1.25}ol li,ul li{padding:0.5rem 1rem}li:last-child{padding-bottom:.75rem}ul{list-style-type:none}ol{list-style-position:inside}</style>
    </head>
    <body>
      <nav><a href="/" id="logo-text">All My Favs</a></nav>
      <header>
        <svg width="192" height="192" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 192 192" id="logo-icon"> <defs> <linearGradient id="gradient" x1="0.85" y1="0.85" x2="0.15" y2="0.15"> <stop offset="0%" stop-color="#099" /> <stop offset="50%" stop-color="#08c" /> <stop offset="100%" stop-color="#0b50da" /> </linearGradient> </defs> <g> <circle cx="96" cy="96" fill="#121212" r="96" opacity="0.2" /> <polygon fill="#121212" opacity="0.5" points="12,96 36,72 36,36 72,36 96,12 120,36 156,36 156,72 180,96 156,120 156,156 120,156 96,180 72,156 36,156 36,120" /> <polygon fill="url(#gradient)" opacity="0.25" points="12,96 36,72 36,36 72,36 96,12 120,36 156,36 156,72 180,96 156,120 156,156 120,156 96,180 72,156 36,156 36,120" /> <circle cx="96" cy="96" fill="#000" opacity="0.1" r="42" /> <circle cx="96" cy="96" fill="none" r="44" stroke="url(#gradient)" stroke-width="4" opacity="0.2" /> <g fill="url(#gradient)"> <path d="M 12 96 L 36 72 L 36 36 L 72 36 L 96 12 L 120 36 L 156 36 L 156 72 L 180 96 L 156 120 L 156 156 L 120 156 L 96 180 L 72 156 L 36 156 L 36 120 Z M 48 76 L 28 96 L 48 116 L 48 144 L 76 144 L 96 164 L 116 144 L 144 144 L 144 116 L 164 96 L 144 76 L 144 48 L 116 48 L 96 28 L 76 48 L 48 48 Z" /> <polygon points="96,56 103,79 117,75 113,89 136,96 113,103 117,117 103,113 96,136 89,113 75,117 79,103 56,96 79,89 75,75 89,79 96,56" /> </g> </g> </svg>
        <h1>${name}</h1>
      </header>
      <main>${renderLists(lists)}</main>
      <script>
        const h3s = document.getElementsByTagName("h3");
        for (const h3 of h3s) {
          h3.addEventListener("click", () => {
            h3.classList.toggle("active");
            const list = h3.nextElementSibling;
            if (list.style.maxHeight) {
              list.style.maxHeight = null;
            } else {
              list.style.maxHeight = list.scrollHeight + "px";
            }
          });
        }
      </script>
    </body>
  </html>`;
    return html;
}
exports.default = renderPage;
//# sourceMappingURL=render.js.map