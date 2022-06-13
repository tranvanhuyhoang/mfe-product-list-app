const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   chainWebpack: (config) => {
//     config.output.libraryTarget("system");
//     config.devServer.set("inline", false);
//     config.devServer.set("hot", false);
//     if (process.env.NODE_ENV !== "production") {
//       config.output.filename(`js/[name].js`);
//     }
//     config.externals(["vue", "vue-router"]);
//   },
// });

module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
  chainWebpack: (config) => {
    if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
      config.plugins.delete("SystemJSPublicPathWebpackPlugin");
    }
  },
  filenameHashing: false,
};

// module.exports = defineConfig({
//   configureWebpack: {
//     output: {
//       libraryTarget: "system",
//     },
//   },
//   chainWebpack: (config) => {
//     config.devServer.set("inline", false);
//     config.devServer.set("hot", false);
//     if (process.env.NODE_ENV !== "production") {
//       config.output.filename(`js/[name].js`);
//     }
//     config.externals(["vue", "vue-router"]);
//     // config.output.libraryTarget("system");
//   },
//   filenameHashing: false,
//   lintOnSave: false,
// });
