'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDir = path.resolve(__dirname,'./src');
const outputDir = path.resolve(__dirname,'www/');
let appConfig = require('./app.config');

let config = {
    context: appDir,
    devtool: 'eval-source-map',
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
            appConfig.rules.html,
            appConfig.rules.inlineFont,
            appConfig.rules.images,
            appConfig.rules.js,
            appConfig.rules.sass
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:      'lib',
            filename:  'assets/js/bundle.lib.js',
            minChunks: Infinity
        })
    ]
};

module.exports = config;
