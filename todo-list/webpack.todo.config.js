const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./todo-list/src/index.js",
    pageLoad: "./todo-list/src/components/pageLoad.js",
    projectList: "./todo-list/src/components/projectList/projectList.js",
    addProjectPopup: "./todo-list/src/components/pending/addProjectPopup.js",
    pending: "./todo-list/src/components/pending/pending.js",
    archive: "./todo-list/src/components/archive/archive.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
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
        type: "asset/resource",
      },
    ],
  },
};
