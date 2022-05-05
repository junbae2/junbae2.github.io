const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'inline-source-map',
  entry: './src/App.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle_app.js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}