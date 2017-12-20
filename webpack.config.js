const HtmlPlugin = require('webpack-html-plugin');
const join = require('path').join;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const stats = {
  chunks: false,
  modules: false,
}

module.exports = [{
  entry: './src/client',
  output: {
    filename: 'index.js',
    path: join(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
      inject: true
    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    rules: [{
      test: /\.(re|ml)$/,
      use: 'bs-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }],
  },
  resolve: {
    extensions: ['.re', '.ml', '.js']
  },
  devServer: {
    stats
  }
}]