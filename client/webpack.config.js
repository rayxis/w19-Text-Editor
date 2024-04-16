const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
	return {
		mode: 'development',  // Set the mode to development (as opposed to production)

		// Define the entry points for Webpack.
		// Webpack will build a separate bundle for each
		entry: {
			main: './src/js/index.js',
			install: './src/js/install.js'
		},

		// Define where to output the bundled JavaScript
		output: {
			filename: '[name].bundle.js', // '[name]' will be substituted with entry point name
			path: path.resolve(__dirname, 'dist'), // Content will be placed in '/dist' folder
		},

		// Configure plugins
		plugins: [
			// This plugin will generate an HTML5 file that includes all webpack bundles in the body using script tags
			new HtmlWebpackPlugin({
				                      template: '/index.html',
				                      title: 'Just Another Text Editor'
			                      }),
			// This plugin will generate a service worker file using libs from the workbox CDN and take care of precaching our app's shell
			new InjectManifest({
				                   swSrc: './src-sw.js',
				                   swDest: 'src-sw.js'
			                   }),
			// This plugin will generate a manifest.json file for our Progressive Web App
			new WebpackPwaManifest({
				                       name: 'Just Another Text Editor',
				                       short_name: 'TextEditor',
				                       description: 'A simple text editor using PWA',
				                       background_color: '#FFFFFF',
				                       theme_color: '#FFFFFF',
				                       publicPath: '',
				                       icons: [
					                       {
						                       src: path.resolve('src/images/logo.png'),
						                       sizes: [96, 128, 192, 256, 384, 512], // Multiple icon sizes
						                       destination: path.join('assets', 'icons') // Path where icons end up in the dist folder
					                       }
				                       ]
			                       })
		],

		// Configure loaders
		module: {
			rules: [
				// Use 'style-loader' and 'css-loader' for .css files
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader']
				},
				// Use 'babel-loader' for .js files
				{
					test: /\.m?js$/,
					exclude: /node_modules/, // Do not transpile files in 'node_modules'. They should be in a form that can be bundled directly
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			]
		}
	};
};