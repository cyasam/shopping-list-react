'use strict';

var webpack = require('webpack');
var path = require('path');
var appConfig = require('./app.config');
var appDir = path.resolve(__dirname,'./src');

var config = {
    devtool: 'eval-source-map',
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
            appConfig.rules.fontUrl,
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
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;