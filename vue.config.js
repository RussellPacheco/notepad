module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        "/": {
          target: "http://localhost:9000",
          secure: false,
          changeOrigin: true
        },
      },
    },
  };
  