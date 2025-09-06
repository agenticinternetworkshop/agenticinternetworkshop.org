/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/agenticinternetworkshop.org',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
