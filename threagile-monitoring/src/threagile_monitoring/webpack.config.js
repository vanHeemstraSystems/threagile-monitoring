const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  // entry: "/src/index.js", // main js
  entry: "/src/view_dashboard.js",
  output: {
    // path: path.resolve(__dirname, "dist"), // output folder
    path: path.resolve(__dirname, "static/js"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./src/index.html", // base html
      template: "./templates/dashboard/view_dashboard.html",
    }),
  ],
  devServer: {
    allowedHosts: "all"
  }
};