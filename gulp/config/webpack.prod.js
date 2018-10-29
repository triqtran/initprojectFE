const config = require('./');
const path = require('path');
const bourbon = require('node-bourbon');
const webpack = require('webpack');
const fileAlias = require('./file-alias');
const PROJECT_PATH = path.join(__dirname, '../..');

module.exports = {
    resolve: {
        alias: Object.keys(fileAlias)
            .reduce((urlAlias, key) => {
                urlAlias[key] = path.join(PROJECT_PATH, fileAlias[key]);
                return urlAlias;
            }, {})
    },
    entry: {
        miniplayer: path.resolve(config.jsSrcDir + '/app/miniplayer/app.js')
    },
    output: {
        path: path.resolve(config.jsDestDir),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|eot|woff|woff2|ttf)$/,
                loader: 'url-loader?name=[path][name].[ext]'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                            includePaths: [
                                bourbon.includePaths,
                                path.resolve(config.jsSrcDir + '/3rdparty/vast-zingtv/base/scss')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        compress: true,
        output: {
            comments: false,
            beautify: false
        }
      }),
      new webpack.BannerPlugin('@copyright Zing')
    ]
};