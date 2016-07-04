/**
 * External dependencies
 */
import { route } from 'redux-routing';

/**
 * Internal dependencies
 */
import Home from 'sections/home';
import About from 'sections/about';

export default [
	route( '/', Home ),
	route( '/about', About )
];
