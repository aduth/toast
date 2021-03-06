/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	merge = require( 'lodash/merge' ),
	ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

/**
 * Internal dependencies
 */
var common = require( './webpack.config.common' );

module.exports = merge( common, {
	output: {
		filename: 'app.min.js'
	},
	module: {
		loaders: common.module.loaders.concat( [
			{
				test: /\.scss$/,
				loaders: ExtractTextPlugin.extract( 'raw!postcss!sass' )
			}
		] )
	},
	resolve: {
		alias: {
			react: 'preact-compat'
		}
	},
	plugins: common.plugins.concat( [
		new webpack.LoaderOptionsPlugin( {
			minimize: true,
			debug: false
		} ),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		} ),
		new ExtractTextPlugin( 'app.min.css', {
			allChunks: true
		} )
	] )
} );
