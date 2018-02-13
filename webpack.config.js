const path = require('path');
const webpack = require('webpack');


module.exports = () => {
	return {
		entry: ['babel-polyfill', './src/app.js'],
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}]
		},
		devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
	}	
};