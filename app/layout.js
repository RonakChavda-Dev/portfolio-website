import localFont from "next/font/local";
import "./globals.css";

// Fonts are saved inside the project (app/fonts), so the site works even without internet.
// Syne = big headings, Instrument Sans = normal text, JetBrains Mono = "code" text.
const display = localFont({
  src: [
    { path: "./fonts/syne-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/syne-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-display",
});
const body = localFont({
  src: [
    { path: "./fonts/instrument-sans-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/instrument-sans-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/instrument-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body",
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ronak Chavda, Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RonakChavda_Dev",
    title: "Ronak Chavda | Developer",
    description: "Automation, agentic AI and websites.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#050d09",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Tells the CSS that JavaScript is on, so scroll animations can start hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      {/* suppressHydrationWarning: browser add-ons (like Video Speed Controller) add their own
          labels to the page, which is harmless. This stops Next.js from showing an error for it. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
