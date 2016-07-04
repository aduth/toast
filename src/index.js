/**
 * External dependencies
 */
import { h, render } from 'preact';
import { navigate } from 'redux-routing';

/**
 * Internal dependencies
 */
import configureStore from 'state';
import Root from 'layout/root';
import 'stylesheets/index.scss';

/**
 * Module variables
 */

const node = document.getElementById( 'app' );
const store = configureStore();
store.dispatch( navigate( window.location.href ) );

function initialize() {
	render( <Root store={ store } />, node, node.lastChild );
}
initialize();

if ( module.hot ) {
	module.hot.accept( 'layout/root', initialize );
}
