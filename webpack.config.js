'use strict';
const { resolve } = require('path');
const webpack = require('webpack');
const entries = require('webpack.entries');
const { SERVER, PATHS, BUILD } = require('app/app-config');

console.log('PATHS.SOURCE_DIR', PATHS.SOURCE_DIR);
console.log('PATHS.entries', entries);
module.exports = {
  entry: entries,

  output: {
    path: BUILD.BUILD_PATH,
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[id].bundle.js',
    publicPath: BUILD.PUBLIC_PATH,
    libraryTarget: 'umd',
  },

  devtool: '#eval',

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [PATHS.SOURCE_DIR],
        exclude: /(node_modules|dist)/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
        include: [PATHS.SOURCE_DIR],
        exclude: [/(node_modules|dist)/],
      },
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: false,
          cache: false,
        },
      },
    }),
  ],

  // local dev server
  devServer: {

      // host
      host: SERVER.HOST,

      // port
      port: SERVER.PORT,

      // 브라우저 루트 아래로 이용가능한 번들 파일의 이름
      // 번들이 이미 동일한 URL 경로에 있는 경우 메모리의 번들이 우선순위가 높음
      publicPath: BUILD.PUBLIC_PATH,

      // error, warning을 console에서 안보이게 함
      quiet: false,

      // build Status 를 보여주지 않는다.
      noInfo: false,

      lazy: true,

      stats: {
        assets: true,
        colors: true,
        version: true,
        hash: true,
        timings: true,
        chunks: true,
        chunkModules: false,
        modules: false,

        // build 오류 상황을 상세히 표시
        errorDetails: false,
      },
    },
};