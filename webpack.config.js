const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname + '/build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './build',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css"
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
    ]
  };