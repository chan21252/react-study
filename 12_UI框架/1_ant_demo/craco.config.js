const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src')
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#EB2F97",
          "@link-color": "#EB2F97",
        },
      },
    }
  ],
}