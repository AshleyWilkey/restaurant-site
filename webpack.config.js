const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
    images: "./src/js/images.js",
    menu: "./src/js/menu.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mi Sinaloa",
      template: "src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Mi Sinaloa | Menu",
      template: "src/menu.html",
      filename: "menu.html",
      chunks: ["menu"],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 2300,
  },
};
