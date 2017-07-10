// jshint esversion:6
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? [
      './src/app.js'
    ]
  : [
      './src/app.js',
      // 'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8081'
    ];


// plugins.push(
//   new webpack.DefinePlugin({
//     DEVELOPMENT: JSON.stringify(DEVELOPMENT),
//     PRODUCTION: JSON.stringify(PRODUCTION)
//   })
// );

const plugins = PRODUCTION
  ?   [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('style-[contenthash:10].css'),
      // new HTMLWebpackPlugin({
      //   template: 'index-template.html'
      // })
    ]
  :   [
      new webpack.HotModuleReplacementPlugin()
    ];


const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract ({
    loader: "css-loader?localIdentName=" + cssIdentifier
  })
  : ['style-loader', 'css-loader?localIdentName' + cssIdentifier];


module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: ['url-loader?limit=10000&name=images/[hash:12].[text]'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
      exclude: /node_modules/
    },

    ]
  },
  //  devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   port: 8081
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }

};