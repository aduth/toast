/**
 * External dependencies
 */
import { applyMiddleware, createStore, compose } from 'redux';
import { createMiddleware, History } from 'redux-routing';
import { identity } from 'lodash';

/**
 * Internal dependencies
 */
import reducer from './reducer';

export default function configureStore( initialState ) {
	return createStore( reducer, initialState, compose(
		applyMiddleware( createMiddleware( History ) ),
		window.devToolsExtension ? window.devToolsExtension() : identity
	) );
}
