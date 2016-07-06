/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { reduce, mapKeys, camelCase } from 'lodash';

/**
 * Internal dependencies
 */
import {
	CRUMBS_RECEIVE,
	CRUMBS_REQUEST,
	CRUMBS_REQUEST_SUCCESS
} from 'state/action-types';

export function requestingAll( state = false, action ) {
	switch ( action.type ) {
		case CRUMBS_REQUEST:
			return true;

		case CRUMBS_REQUEST_SUCCESS:
			return false;
	}

	return state;
}

export function items( state = {}, action ) {
	switch ( action.type ) {
		case CRUMBS_RECEIVE:
			return reduce( action.crumbs, ( memo, crumb ) => {
				memo[ crumb.id ] = mapKeys( crumb, ( value, key ) => {
					return camelCase( key );
				} );

				return memo;
			}, { ...state } );
	}

	return state;
}

export default combineReducers( {
	requestingAll,
	items
} );
