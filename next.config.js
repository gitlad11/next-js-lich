module.exports = {
  reactStrictMode: true,
   async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://lichi.com/api/:slug*'
      }
    ]
  }
}
