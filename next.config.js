/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: process.env.NODE_ENV === 'development' ? false : true,
  compress: true,

  webpack (config, { isServer }) {
    config.module = {
      ...config.module,
      rules: config.module.rules.concat([
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack']
        }
      ]),
      exprContextCritical: false,
      unknownContextCritical: false
    }

    return config
  },
  images: { unoptimized: true }
}

module.exports = nextConfig