const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base');
const {merge} = require('webpack-merge');

module.exports = merge(base,{
  entry: path.resolve(__dirname,'./src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'./dist/client')
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase:'./dist',
    open:true,
    port:3333,
    hot:true,
    // hotOnly:true
  },
  plugins:[
    // new htmlWebpackPlugin({
    //   title:"ssr title",
    //   template:"./index.html",
    //   // minify:{
    //   //   removeComments:true,
    //   //   collapseWhitespace:true,
    //   //   minifyCSS:true
    //   // }
    // }),
    // new webpack.HotModuleReplacementPlugin()
  ]
});