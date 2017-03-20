'use strict';

var webpack = require('webpack');
var path = require('path');
var appConfig = require('./app.config');
var appDir = path.resolve(__dirname,'./src');

var config = {
    devtool: 'cheap-eval-source-map',
    entry: appDir + '/js/app.jsx',
    output: {
        path: path.resolve(__dirname, 'www/'),
        filename: 'assets/js/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
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
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: 'assets/js/bundle.lib.js',
            minChunks: Infinity,
            async: true
        })
    ]
};

module.exports = config;