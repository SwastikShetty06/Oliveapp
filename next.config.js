/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static HTML export
  output: 'export',

  // Set the base path to your repository name
  basePath: '/Oliveapp',

  // Disable server-based image optimization (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;