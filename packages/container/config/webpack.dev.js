const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packagejson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 4000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        marketing: "marketing@http://localhost:4001/remoteEntry.js",
      },
      shared: packagejson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
