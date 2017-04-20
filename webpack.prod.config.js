'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDir = path.resolve(__dirname,'./src');
const outputDir = path.resolve(__dirname,'www/');
let appConfig = require('./app.config');

let config = {
    context: appDir,
    devtool: 'cheap-module-source-map',
    entry: {
        js: appDir + '/js/app.jsx',
        lib: appConfig.libs
    },
    output: {
        path: outputDir,
        filename: 'assets/js/bundle.[name]'
    },
    resolve: appConfig.resolve,
    module : {
        rules : [
            appConfig.rules.fontFile,
            appConfig.rules.fontUrl,
            appConfig.rules.images,
            appConfig.rules.js,
            appConfig.rules.extractCSS,
            appConfig.rules.html
        ]
    },
    devServer:   {
        contentBase: 'www',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appDir + '/templates/static/index.tpl'
        }),
        appConfig.ExtractTextPlugin,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: 'assets/js/bundle.lib.js',
            minChunks: Infinity
        })
    ]
};

module.exports = config;