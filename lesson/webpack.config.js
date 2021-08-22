const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = {
	entry: "./src/js/main.js",
	output: {
	    //filename:"main.bundle.js",
		filename:"main.[contenthash].js",
		path: resolve(__dirname,"build")
	},
	module:{
		rules:[
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{test: /\.(png|jpe?g|gif)$/i,
				loader:"file-loader",
				options:{
					outputPath: "pic",
				}
			},
			{test: /\.css$/i,
				use:[MiniCssExtractPlugin.loader, "css-loader"]
			},
			{test: /\.s[ac]ss$/i,
				use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({template: resolve(__dirname, "./src/index.html")}),
		new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
		new BundleAnalyzerPlugin({}),
	]
	,
	devServer: {
		port: 9000,
	}
}
;
