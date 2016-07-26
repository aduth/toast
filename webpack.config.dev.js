/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	merge = require( 'lodash/merge' );

/**
 * Internal dependencies
 */
var common = require( './webpack.config.common' );

module.exports = merge( common, {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server'
	].concat( common.entry ),
	output: {
		filename: 'app.js',
		publicPath: 'http://localhost:3000/'
	},
	resolve: {
		alias: {
			react: 'preact-compat'
		}
	},
	module: {
		loaders: common.module.loaders.concat( [
			{
				test: /\.scss$/,
				loaders: [ 'style', 'css', 'postcss', 'sass' ]
			}
		] )
	},
	plugins: common.plugins.concat( [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	] ),
	cache: true,
	devtool: 'source-map',
} );
