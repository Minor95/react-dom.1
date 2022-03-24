const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
    context: path.resolve(__dirname, "./src"),
    mode: "development",
    entry: {
      main:  "./index.js"
    },
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.m?js$/i,
                exclude: "/node_modules/",
                loader: "babel-loader",
                options: {
                    presets:
                        ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 9000
    }
}