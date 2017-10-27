const webpack = require('webpack'),
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ImageminPlugin = require('imagemin-webpack-plugin').default;
let webpackConfig = require("./package.json").webpackConfig;
module.exports = {
  context: __dirname + webpackConfig.inputFolder,
  entry: {
    global: './js/global.js',
  },
  output: {
    path: __dirname + webpackConfig.outputFolder,
    filename: 'js/[name].min.js',
    publicPath: webpackConfig.prodServer
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader']
      })
    }, {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: false,
            modules: true,
            importLoaders: true,
            localIdentName: "[local]"
          }
        }, {
          loader: "postcss-loader",
          options: {
            plugins: function() {
              return [
                require("autoprefixer")({
                  browsers: ['last 2 versions', 'safari 5',
                    'ie 11', 'opera 12.1', 'ios 6',
                    'android 4'
                  ]
                })
              ];
            }
          }
        }, {
          loader: "sass-loader"
        }]
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ["babel-preset-es2015"].map(require.resolve)
      }
    }, {
      test: /\.(eot|woff|woff2|ttf)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[ext]'
        }
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            quality: 65
          },
          pngquant: {
            quality: "10-20",
            speed: 4
          },
          svgo: {
            plugins: [{
              removeViewBox: false
            }, {
              removeEmptyAttrs: false
            }]
          },
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7,
            interlaced: false
          }
        }
      }]
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].min.css',
      allChunks: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),
    new CopyWebpackPlugin([{
      from: 'images-theme/',
      to: 'images-theme/'
    }]),
    new CopyWebpackPlugin([{
      from: 'fonts/',
      to: 'fonts/'
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
};
