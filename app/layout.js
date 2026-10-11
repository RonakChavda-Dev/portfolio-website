import localFont from "next/font/local";
import "./globals.css";

// Fonts are saved inside the project (app/fonts), so the site works even without internet.
// Instrument Sans = all normal text and headings, Instrument Serif = the slanted fancy words,
// JetBrains Mono = small "code" labels.
const sans = localFont({
  src: [
    { path: "./fonts/instrument-sans-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/instrument-sans-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/instrument-sans-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/instrument-sans-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-sans",
});
const serif = localFont({
  src: [{ path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-serif",
});
const mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-mono",
});

// Title, description and the preview card shown when the link is shared
// (WhatsApp, LinkedIn, X, Discord...). The card picture is public/og-image.png.
export const metadata = {
  metadataBase: new URL("https://ronakchavda.dev"),
  title: "Ronak Chavda | Developer",
  description:
    "Ronak Chavda: developer building automation, agentic AI tools, and websites. Based in Gujarat, India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ronak Chavda",
    title: "Ronak Chavda | Developer",
    description: "Automation, agentic AI and websites. Based in Gujarat, India.",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Ronak Chavda, Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RonakChavda_Dev",
    title: "Ronak Chavda | Developer",
    description: "Automation, agentic AI and websites.",
    images: ["/og-image.png?v=2"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0b" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Tells the CSS that JavaScript is on, so scroll animations can start hidden */}
        {/* Safety: if the scroll animations don't start within 3 seconds for any reason,
            show everything anyway, so the page is never left empty. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__fxReady){document.documentElement.classList.remove('js')}},3000)",
          }}
        />
        {/* Picks light or dark mode before the page shows, so it never flashes the wrong colors.
            It uses the visitor's last choice, or their computer's setting the first time. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}",
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser add-ons (like Video Speed Controller) add their own
          labels to the page, which is harmless. This stops Next.js from showing an error for it. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
