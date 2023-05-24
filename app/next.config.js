/** @type {import('next').NextConfig} */

const webpack = require('webpack')
const path = require('path')
const distDir = process.env.APP_BUILD_DIR

module.exports = {
  distDir,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  transpilePackages: ['@mui/material', '@mui/system'],
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    )
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5051',
        pathname: '/**',
      },
    ],
  },
}
