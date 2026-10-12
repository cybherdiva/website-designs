# Website designs

The site layouts, extracted as plain HTML. No builder, no login, no database.

The Grok preview cannot download or push itself. These files are the part worth keeping: the pages, the type, the color, the photos.

## Open one

| Site | Folder |
|---|---|
| Northline Consulting (Business) | [`sites/northline/`](sites/northline/) |
| Verde Table (Restaurant) | [`sites/verde/`](sites/verde/) |
| Harbor & Co. (Online Store) | [`sites/harbor/`](sites/harbor/) |
| Lumen Frames (Photography) | [`sites/lumen/`](sites/lumen/) |
| Alder Realty (Real Estate) | [`sites/alder/`](sites/alder/) |
| Bloom Salon (Beauty) | [`sites/bloom/`](sites/bloom/) |
| Stillpoint Yoga (Wellness) | [`sites/stillpoint/`](sites/stillpoint/) |
| Oven & Oak (Bakery) | [`sites/oven/`](sites/oven/) |

Start at [`index.html`](index.html) for the gallery.

## Make it yours

Edit the HTML in any folder. Words, prices, phone numbers, and colors are in the file. Colors are the CSS variables on `<body>`: `--primary`, `--ink`, `--paper`.

Photos live in `images/`. Swap a file and keep the same name, or change the `src`.

## Host it

- **GitHub Pages:** Settings → Pages → Deploy from branch `main` / root. The gallery will be at the Pages URL. Each site is a subfolder.
- **Your domain:** point the domain at Pages, Cloudflare, or any static host. These are normal files.
- **One site only:** copy a single `sites/<name>/` folder plus `site.css`, `site.js`, and `images/`. Fix the `../../` paths if you flatten the folder.

The contact form and bag button are visual only. Hook the form to your own mail or form service when you publish.
