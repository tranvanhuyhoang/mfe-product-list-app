module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
      config.plugins.delete("SystemJSPublicPathWebpackPlugin");
    }
  },
  filenameHashing: false,
};
