const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./restaurant/src/index.js",
    typography: "./restaurant/src/components/typography.js",
    pageLoad: "./restaurant/src/components/pageLoad.js",
    menu: "./restaurant/src/components/menu/menu.js",
    home: "./restaurant/src/components/home.js",
    contact: "./restaurant/src/components/contact.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
