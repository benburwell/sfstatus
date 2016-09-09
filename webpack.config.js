var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [ 'es2015', 'react' ],
				},
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		new HtmlWebpackPlugin({
			template: path.join('src', 'html', 'app.ejs'),
			inject: false,
		}),
	],
}
