'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
    rules : {
        sass: {
            test: /\.scss$/,
            exclude: '/node_modules/',
            loaders: [
                'style-loader',
                {
                    loader: 'css-loader', query: {sourceMap: true}
                },
                {
                    loader: 'sass-loader', query: {sourceMap: true}
                }
            ]
        },
        js: {
            test: /\.jsx?$/,
            exclude: '/node_modules/',
            loader: ['babel-loader', 'eslint-loader']
        },
        fontUrl: {
            test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/',
                publicPath: 'assets/fonts/'
            }
        },
        fontFile: {
            test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/',
                publicPath: 'assets/fonts/'
            }
        },
        images: {
            test: /\.(jpe?g|png|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/',
                publicPath: 'assets/images/'
            }
        },
        extractCSS: {
            test: /\.scss?$/i,
            loader: ExtractTextPlugin.extract({
                loader: [
                    {loader: 'css-loader', query: {sourceMap: true}},
                    {loader: 'resolve-url-loader', query: {keepQuery: true}},
                    {loader: 'sass-loader', query: {sourceMap: true}}
                ]
            })
        }
    }
};

config.ExtractTextPlugin = new ExtractTextPlugin('assets/css/app.css');

module.exports = config;