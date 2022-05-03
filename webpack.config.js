const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/App.js',
  // 'js/app': ['./src/App.js'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index_bundle.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // filename: 'index.html',
    }),
  ],
}