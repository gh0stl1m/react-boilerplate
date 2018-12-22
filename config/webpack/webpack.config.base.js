// External libraries
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env', {
            targets: [
              'last 2 versions',
              'not dead',
              'not < 2%',
            ],
            useBuiltIns: 'entry',
          }], '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ManifestPlugin({
      fileName: 'assets-manifest.json',
    }),
  ]
}