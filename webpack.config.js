var webpack = require('webpack');
var path = require('path');

//var buildDir = path.resolve(__dirname,'www/assets');
var appDir = path.resolve(__dirname,'./src');
//var PROD = JSON.parse(process.env.PROD_ENV || '0');

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
            {
                test: /\.scss$/,
                exclude: '/node_modules/',
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader', query: {sourceMap:true}
                    },
                    {
                        loader: 'sass-loader', query: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader : ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/',
                    publicPath: 'assets/fonts/'
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/',
                    publicPath: 'assets/images/'
                }
            }
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