'use strict';

const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR,
  TRACKING_ID: process.env.TRACKING_ID || '',
  AD_CONVERSION_CONFIG: process.env.AD_CONVERSION_CONFIG || '',
});

module.exports = function () {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: 'assets/[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var',
    },

    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'TRACKING_ID': JSON.stringify(METADATA.TRACKING_ID),
        'AD_CONVERSION_CONFIG': JSON.stringify(METADATA.AD_CONVERSION_CONFIG),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR,
        }
      }),
      new NamedModulesPlugin(),
      new LoaderOptionsPlugin({
        debug: true,
        options: {
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },

        }
      }),

    ],

    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      proxy: {
        '/docs': {
            target: 'http://localhost:3001/',
            secure: false
        }
      },
      outputPath: helpers.root('dist')
    },
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  });
};
