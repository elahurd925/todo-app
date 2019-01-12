const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.base.config');

const BUILD_DIR = path.join(__dirname, 'assets');

module.exports = merge(baseConfig, {
	output: {
		path: BUILD_DIR,
		filename: 'static/js/[name].[contentHash].js',
		publicPath: '/app'
	},
	mode: 'none',
	devtool: 'hidden-source-map',
	optimization: {
		minimizer: [
			new UglifyJsPlugin()
		]
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	]
});