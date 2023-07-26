module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      //   crypto: require.resolve("crypto-browserify"),
      //   os: require.resolve("os-browserify/browser"),
      //   path: require.resolve("path-browserify"),
      //   zlib: require.resolve("browserify-zlib"),
    },
  },
};
