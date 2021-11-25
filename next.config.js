module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['khansortium.com']
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },

}
