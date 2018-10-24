const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './server.js',
    target: 'node',
    output: {
        path: path.resolve('bundle'),
        filename: 'server.js'
    },
    resolve: {
        alias: {
            Package: path.resolve(__dirname, 'Packages/'),
        }
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'css-loader' ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
}