const config = require('./');
const path = require('path');
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
        main: path.resolve(config.jsSrcDir + '/app/main.js'),
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
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
};