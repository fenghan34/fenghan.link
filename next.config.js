const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
module.exports = withImages({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
    config.plugins.push(new WindiCSSWebpackPlugin())

    return config
  },
})
