const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const stylusRegex = /\.(styl|stylus)$/;

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "client", "index.js") 
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "client", "index.html")
        })
    ],
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "client"), "node_modules"] },
    devServer: { 
        contentBase: path.join(__dirname, "client")
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: stylusRegex,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader", 
                    },
                    {
                        loader: "css-loader",
                        options: { 
                            url: false 
                        }
                    },
                    { loader: 'stylus-loader' }
                ]                
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    optimization: {
        splitChunks: { chunks: "all" }
    }
};