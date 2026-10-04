/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build the site as plain files (in the "out" folder), so it can be hosted
  // on Cloudflare Pages (or any simple host) without a server.
  output: "export",
  // Images are used as they are (no server needed to resize them).
  images: { unoptimized: true },
};
export default nextConfig;
