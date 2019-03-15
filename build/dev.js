const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		vendor: ['react','react-dom','react-redux','antd','redux','react-router-dom'],
		app: path.join(rootPath, './src/main.js'),
	},
	output: {
		filename: '[name].min.js',
		path: path.join(rootPath, './dist'),
	},
	mode: 'development',
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
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(rootPath, './dist'),
		open: true,
		index: 'index.html',
		inline: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
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
