module.exports = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: [
      'substackcdn.com',
      'substack-post-media.s3.amazonaws.com',
      'cdn.substack.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.substack.com',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.substack.com',
      },
    ],
  },
}