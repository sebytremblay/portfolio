module.exports = {
  basePath: "/sebytremblay",
  assetPrefix: "/sebytremblay/",
  output: "export",
  reactStrictMode: true,

  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
    ]
  },
};
