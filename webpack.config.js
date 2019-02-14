const path = require('path')

module.exports = {
  entry: "./index.js",
  devServer: {
    port: "8080",
    historyApiFallback:{
      index: "public/index.html"
    }
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};