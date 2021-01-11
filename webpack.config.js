const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  const PRODUCTION = (env === 'production');
  const FILENAME_HASH = PRODUCTION ? 'contenthash' : 'hash';
  const HASH_MODE = PRODUCTION ? 'contenthash' : 'chunkhash';
  
  return {
    entry: './src/index.tsx',
    devtool: (PRODUCTION) ? 'none' : 'inline-source-map',
    module: {
      rules: [
        // style-loader to add all the styles  inside the style tag of the document
        // typings-for-css-modules-loader to generate automatic type definitions
        // css-loader to bundle all the css files into one file
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: '@teamsupercell/typings-for-css-modules-loader' },
            { loader: 'css-loader', options: { modules: true } },
          ]
        },
        {
          test: /\.(ts|js)x?$/,
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
      filename: `[name].[${FILENAME_HASH}].js`,
      chunkFilename: `[name].[${HASH_MODE}].js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    devServer: {
      contentBase: './src',
      inline: true,
      liveReload: false,
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
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!images/**'],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        publicPath: "",
      }),
    ]
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