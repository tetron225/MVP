const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const SOURCE_DIR = path.join(__dirname, 'client', 'src')
const OUTPUT_DIR = path.join(__dirname, 'client', 'dist')

module.exports = {
  entry: {index: path.join(SOURCE_DIR, "index.js")},
  //watching/persisting
  watch: true,

  output: {
    path: OUTPUT_DIR,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
  //changes where the startin point of webpack should be
  //entry: {index: path.resolve(__dirname, "source", "index.js")}

  //changing the output of out bundle
  //output: {
  //  path: path.resolve(__dirname, "build")
  //}
};