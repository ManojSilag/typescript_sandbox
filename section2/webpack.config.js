const path = require("path");

module.exports = {
  devtool : "eval-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath:'public'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")]
      }
    ]
  },
  resolve:{
      extensions: ['.ts', '.js']
  }
};
