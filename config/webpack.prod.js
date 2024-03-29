'use strict';

const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  ENV: ENV,
  HMR: false,
  TRACKING_ID: process.env.TRACKING_ID || '',
  AD_CONVERSION_CONFIG: process.env.AD_CONVERSION_CONFIG || '',
});

module.exports = function () {
  return webpackMerge(commonConfig({env: 'production'}), {

    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      filename: 'assets/[name].[chunkhash].bundle.js',
      sourceMapFilename: '[name].[chunkhash].bundle.map',
      chunkFilename: 'assets/[id].[chunkhash].chunk.js'
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
      new UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),

      new NormalModuleReplacementPlugin(
        /angular2-hmr/,
        helpers.root('config/modules/angular2-hmr-prod.js')
      ),

      new LoaderOptionsPlugin({
        debug: false,
        options: {
          tslint: {
            emitErrors: true,
            failOnHint: true,
            resourcePath: 'src'
          },
          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?\]?=/]
          },

        }
      }),

    ],

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
