'use strict';

const webpack = require('webpack');
const path = require('path');
const appDir = path.resolve(__dirname,'./src');
let appConfig = require('./app.config');

let config = {
    context: appDir,
    devtool: 'cheap-module-source-map',
    entry: {
        js: appDir + '/js/app.jsx',
        lib: appConfig.libs
    },
    output: {
        path: path.resolve(__dirname, 'www/'),
        filename: 'assets/js/bundle.[name]'
    },
    resolve: appConfig.resolve,
    module : {
        rules : [
            appConfig.rules.fontFile,
            appConfig.rules.fontUrl,
            appConfig.rules.images,
            appConfig.rules.js,
            appConfig.rules.extractCSS
        ]
    },
    devServer:   {
        contentBase: 'www',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
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