module.exports = {
  basePath: "",
  assetPrefix: "/",
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
