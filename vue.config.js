const path = require("path");
const { name } = require("./package");

const deployPath = process.env.QIANKUN_ENV !== "micro" ? "/" : `/${name}/`;

module.exports = {
  publicPath: deployPath,
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  productionSourceMap: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
