/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['img.shields.io'],
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
