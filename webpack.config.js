const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // style-loader to add all the styles  inside the style tag of the document
      // typings-for-css-modules-loader to generate automatic type definitions
      // css-loader to bundle all the css files into one file
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: "@teamsupercell/typings-for-css-modules-loader" },
          { loader: "css-loader", options: { modules: true } },
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './src',
    inline: true,
    liveReload: false,
    writeToDisk: true,
    open: {
      app: ['chrome', '--incognito'],
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!images/**'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};