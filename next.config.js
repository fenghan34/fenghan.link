/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    })

    return config
  },
}
