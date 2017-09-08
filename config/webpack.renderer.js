const { root } = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
  entry: root('./scripts/pre-renderer.ts'),
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [root('src'), 'node_modules'],
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: root('dist'),
    filename: 'server.js',
    sourceMapFilename: '[name].map',
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
        loader: 'raw-loader!sass-loader!import-glob-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('src/index.html')]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      },

    ],

  },
  plugins: [
    new DefinePlugin({
        'ENV': JSON.stringify('production'),
        'TRACKING_ID': JSON.stringify(process.env.TRACKING_ID || ''),
      }),
  ],
  target: 'node'
};
