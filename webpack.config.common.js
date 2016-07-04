/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	autoprefixer = require( 'autoprefixer' );

module.exports = {
	entry: [
		'whatwg-fetch',
		__dirname + '/src/index.js'
	],
	output: {
		path: __dirname + '/dist'
	},
	resolve: {
		modules: [ 'node_modules', 'src' ],
		extensions: [ '', '.js' ]
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
		} )
	],
	postcss: function() {
		return [ autoprefixer ];
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/src',
				loader: 'babel',
				query: {
					cacheDirectory: true
				}
			}
		]
	}
};
