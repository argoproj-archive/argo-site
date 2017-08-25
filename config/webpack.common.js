'use strict';

const helpers = require('./helpers');

const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const METADATA = {
  title: 'Applatix',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = function () {
  return {
    entry: {
      'polyfills': './src/app/polyfills.browser.ts',
      'vendor': './src/app/vendor.browser.ts',
      'main': './src/app/main.browser.ts'
    },

    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('src'), 'node_modules'],
    },


    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader!angular2-template-loader',
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!raw-loader!sass-loader!import-glob-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader'
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file'
        },

      ],

    },
    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') // location of your src
      ),
      new CopyWebpackPlugin([{
          from: 'node_modules/font-awesome/fonts',
          to: 'assets/font-awesome/fonts'
      }, {
          from: 'src/assets/favicon',
          to: 'assets/favicon'
      }, {
          from: 'src/assets/images',
          to: 'assets/images'
      }]),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),
      new LoaderOptionsPlugin({}),

    ],
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};
