const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		vendor: ['react'],
		app: path.join(rootPath, './src/main.js'),
	},
	output: {
		filename: '[name].min.js',
		path: path.join(rootPath, './dist'),
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.json', 'jsx'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'react',
			chunks: ['vendor','app'],
			filename: 'index.html',
			template: path.join(rootPath, './index.html'),
			inject: 'body',
			chunksSortMode: 'dependency',
		}),
	],
};
