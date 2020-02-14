const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path");
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= (env) => {

    const base = merge(common(env),{
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: path.resolve(process.cwd(), "dist"),
            lazy: true,
        },
        plugins: [
            new Dotenv({
                path: path.resolve(process.cwd(), `env/.env.development`),
                safe: false,
                systemvars: true
            })
        ]
        
    })

   base.output.chunkFilename = "[name].bundle.js"
    if (process.env.platform === "server") {
       // base.plugins.push(new CleanWebpackPlugin(["dist"], { root: process.cwd() }));
        base.plugins.push(new NodemonPlugin({
            script: path.resolve(process.cwd(), "dist/index.js"),
            watch: path.resolve(process.cwd(), "dist"),
            events: {
                // "restart": "lsof -t -i:5000 && echo $(lsof -t -i:5000) && kill $(lsof -t -i:5000)",
                // "crash": "lsof -t -i:5000 && kill $(lsof -t -i:5000)"
            }
        }))
    } else {
        base.plugins.push(new Dotenv({
            path: path.resolve(process.cwd(), `env/.env.development`),
            safe: false,
            systemvars: true
        }))
    } 

    return base;
}