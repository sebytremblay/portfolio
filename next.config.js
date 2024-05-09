module.exports = {
  basePath: "/sebytremblay.io",
  assertPrefix: "/sebytremblay.io/",
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
