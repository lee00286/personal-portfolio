/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'portfolio';

const nextConfig = {
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
