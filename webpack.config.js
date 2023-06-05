const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                  },
                ],
            }, {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}