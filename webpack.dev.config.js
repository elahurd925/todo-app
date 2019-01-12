const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const baseConfig = require('./webpack.base.config');

const BUILD_DIR = path.join(__dirname, 'assets');
const PUBLIC_PATH = '/';

module.exports = merge(baseConfig, {
	output: {
		path: BUILD_DIR,
		filename: 'static/js/[name].[hash].js',
		publicPath: PUBLIC_PATH
	},
	devtool: 'eval-source-map',
	mode: 'development',
	devServer: {
		contentBase: BUILD_DIR,
		compress: true,
		hot: true,
		progress: true,
		port: 8080,
		open: true,
		https: false,
		historyApiFallback: true,
		watchOptions: {
			ignored: /node_modules/
		},
		proxy: {
			'/v[0-9]+/**' : {
				target: 'localhost',
				secure: false
			}
		},
		host: 'localhost'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
});