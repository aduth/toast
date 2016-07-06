/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import route from './route/reducer';
import crumbs from './crumbs/reducer';

export default combineReducers( {
	route,
	crumbs
} );
