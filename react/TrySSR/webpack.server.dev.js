const WebpackNodeExternals = require('webpack-node-externals')
const path = require('path');
const base = require('./webpack.base');
const {merge} = require('webpack-merge');

module.exports = merge(base,{
  entry: path.resolve(__dirname,'./src/server/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'./dist/server')
  },
  externals: [WebpackNodeExternals()],  //排除不需要的打包模块
  target: 'node'
});