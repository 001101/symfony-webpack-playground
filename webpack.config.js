const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

module.exports = {
    entry: glob.sync('./src/*/Resources/js/index.js'),
    output: {
        path: 'web',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'admin.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons'
        })
    ]
};
