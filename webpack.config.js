const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new CopyPlugin({
        patterns: [
          {from: "static", to: "static"}
        ]
      }

      )
     
    ],
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                ],
              },
            },
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: "sass-loader",
                options: {
                  sassOptions: {
                    includePaths: ['node_modules'],
                  },
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
        ],
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin(),
        ],
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 8070,
        historyApiFallback: true,
      },
      };
      