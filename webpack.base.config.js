const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');
const BUILD_DIR = path.join(__dirname, 'assets');
const PUBLIC_PATH = process.env.NODE_ENV != 'production' ? '/' : '/app';

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: {
		main: APP_DIR + '/index.tsx'
	},
	resolve: {
		extensions: [
			'.web.ts',
			'.ts',
			'.web.tsx',
			'.tsx',
			'.web.js',
			'.js',
			'.json'
		],
		alias: {
			src: path.resolve(__dirname, 'src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				include: APP_DIR,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					},
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
							publicPath: PUBLIC_PATH
						},
					}
				]
			}
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			inject: true,
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
			watch: APP_DIR
		}),
		new webpack.DefinePlugin(envKeys)
	]
}