const path = require('path');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = env => {
  const PRODUCTION = env.production;
  const NAME_MODE = PRODUCTION ? '[name].[contenthash]' : '[name]';
  
  return {
    entry: './src/index.tsx',
    devtool: (PRODUCTION) ? false : 'inline-source-map',
    module: {
      rules: [
        // (PROD) MiniCssExtract for separate css files and lazy loading
        // (DEV) style-loader to add all the styles inside the style tag of the document
        // typings-for-css-modules-loader to generate automatic type definitions
        // css-loader to bundle all the css files into one file
        // postcss-loader to generate vendor prefixes based on browser support
        {
          test: /\.css$/,
          use: [
            { loader: (PRODUCTION) ?  MiniCssExtractPlugin.loader : 'style-loader' },
            { loader: '@teamsupercell/typings-for-css-modules-loader' },
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'postcss-loader', options: { postcssOptions: { plugins: [ autoprefixer ] } } },
          ]
        },
        {
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
      filename: `${NAME_MODE}.js`,
      chunkFilename: `${NAME_MODE}.js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      overlay: true,
      writeToDisk: true,
      historyApiFallback: true,
      open: {
        app: [getApp(), '--incognito'],
      }
    },
    optimization: {
      splitChunks: {   
          chunks: 'all',
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: /@license/i,
            },
          },
          extractComments: true,
        }),
        new CssMinimizerPlugin({
          sourceMap: (PRODUCTION) ? false : true,
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      !PRODUCTION && new ReactRefreshWebpackPlugin(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!images/**'],
      }),
      new MiniCssExtractPlugin({
        filename: `${NAME_MODE}.css`,
        chunkFilename: `${NAME_MODE}.css`,
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        publicPath: '',
      }),
    ].filter(Boolean), // Remove ReactRefresh if it's production.
  }
};

function getApp() {
  const platform = process.platform;
  let app = '';

  if (platform === 'linux') {
    app = 'google-chrome';

    // For Windows Subsystem for Linux (WSL)
    if (os.release().toLowerCase().includes('microsoft')) {
      app = '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe';
    }
    // MacOS
  } else if (platform === 'darwin') {
    app = 'Google Chrome';
    // Windows
  } else if (platform === 'win32') {
    app = 'chrome';
  }

  return app;
}