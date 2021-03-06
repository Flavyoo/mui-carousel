const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, argv) => {
  const isEnvProduction = argv.mode === 'production';

  return {
    entry: './src/demoapp/index.tsx',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    mode: !isEnvProduction ? 'development' : 'production',
    devServer: {
      static: {
        directory: './dist',
      },
      port: 'auto',
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: 'file-loader',
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateContent: ({ htmlWebpackPlugin }) =>
          '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
          htmlWebpackPlugin.options.title +
          '</title></head><body><div id="app"></div></body></html>',
        filename: 'index.html',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      minimize: isEnvProduction,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    stats: {
      assetsSort: '!size',
      groupAssetsByChunk: true,
    },
  };
};
