# Ronak Chavda – Portfolio Website

This is Ronak's portfolio website, built with **Next.js**.

## How to see the website on your computer

You only need to do steps 1 and 2 once.

1. **Install Node.js.** Go to https://nodejs.org, download the "LTS" version, and install it like any normal program.
2. **Open this folder in a terminal.** In File Explorer, open the **Personal Portfiolio Website** folder, click the address bar at the top, type `cmd` and press Enter. A black window opens.
   Type this and press Enter (it downloads the parts the website needs, takes a minute):

   ```
   npm install
   ```

3. **Start the website.** In the same black window, type:

   ```
   npm run dev
   ```

4. Open your browser and go to **http://localhost:3000**

To stop it, click the black window and press `Ctrl + C`.

## How to change the words, links or projects

Open **`data/site.js`**. All the text, social links, projects and skills are written there.
Change them, save the file, and the website updates by itself.

## How to change the photo or logo

Replace the files inside **`public/images/`** with new ones that have the **same names**:

- `ronak-portrait.jpg` – the photo (a tall picture, 4 wide by 5 high, works best)
- `logo-white.png` – the white logo
- `logo-green.png` – the green logo (loading screen)

The small icon in the browser tab is **`app/icon.png`**.

## What each folder holds

| Folder / file          | What it is                                              |
| ---------------------- | ------------------------------------------------------- |
| `app/page.js`          | The page. It puts all the sections in order.            |
| `app/layout.js`        | The page title, fonts and other settings.               |
| `app/globals.css`      | Colors and styles used everywhere.                      |
| `app/fonts/`           | The font files.                                         |
| `components/`          | One file for each part of the page (Hero, About, …), each with its own `.module.css` style file. |
| `data/site.js`         | All the words and links.                                |
| `public/images/`       | Photo and logos.                                        |

## How to put it on the internet (free, with Cloudflare Pages)

The website is set up to build as plain files, so Cloudflare Pages can host it for free.

1. **Put this folder on GitHub** as a new repository (GitHub Desktop is the easiest way).
2. Go to https://dash.cloudflare.com and sign up / log in.
3. Open **Workers & Pages → Create → Pages → Connect to Git**, and pick your repository.
4. Use these build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Click **Save and Deploy**. After a minute or two you get a free link ending in `.pages.dev`.

Every time you push a change to GitHub, Cloudflare updates the website by itself.

## How to connect your domain (ronakchavda.dev)

1. Get **ronakchavda.dev** (for example free for 1 year from Name.com through the GitHub Student Pack).
   Turn **auto-renew off** right after, so nothing is charged when the free year ends.
2. In Cloudflare, click **Add a domain**, type `ronakchavda.dev`, and pick the **Free** plan.
3. Cloudflare shows you **2 nameservers** (two addresses ending in `ns.cloudflare.com`).
4. In Name.com, open the domain → **Nameservers**, delete the old ones, paste the 2 Cloudflare ones, and save.
5. Wait until Cloudflare says the domain is **Active** (usually within an hour, sometimes up to a day).
6. Back in your Pages project, open **Custom domains → Set up a custom domain**, type `ronakchavda.dev`, and confirm.
   Cloudflare sets up everything else, including the secure lock (HTTPS), which .dev domains need.

## The link preview card

When someone shares ronakchavda.dev on WhatsApp, LinkedIn, X or Discord, they see the picture in
**`public/og-image.png`** with the title and description set in **`app/layout.js`**.
It only works once the site is live on ronakchavda.dev.

## Folders that are not uploaded to GitHub

The **`.gitignore`** file tells Git to skip things that should not be uploaded:
`node_modules`, `.next`, `out` (all made automatically), and the **`_trash`** and **`_originals`** folders.
