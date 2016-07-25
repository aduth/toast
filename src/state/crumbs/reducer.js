/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { assign, reduce, get, map } from 'lodash';

/**
 * Internal dependencies
 */
import {
	CRUMBS_RECEIVE,
	CRUMBS_REQUEST,
	CRUMBS_REQUEST_SUCCESS
} from 'state/action-types';

export function requestingQuery( state = {}, action ) {
	switch ( action.type ) {
		case CRUMBS_REQUEST:
		case CRUMBS_REQUEST_SUCCESS:
			const { query, type } = action;
			return {
				...state,
				[ JSON.stringify( query ) ]: CRUMBS_REQUEST === type
			};
	}

	return state;
}

export function items( state = {}, action ) {
	switch ( action.type ) {
		case CRUMBS_RECEIVE:
			return reduce( action.crumbs, ( memo, crumb ) => {
				const thumbnail = get( crumb, '_embedded.wp:featuredmedia[0]', {} );
				return assign( memo, {
					[ crumb.id ]: {
						id: crumb.id,
						title: crumb.title.rendered,
						thumbnail: {
							src: thumbnail.source_url
						},
						tags: get( crumb, '_embedded.wp:term[0]', [] )
					}
				} );
			}, { ...state } );
	}

	return state;
}

export function queries( state = {}, action ) {
	switch ( action.type ) {
		case CRUMBS_REQUEST_SUCCESS:
			const { query, crumbs } = action;
			return {
				...state,
				[ JSON.stringify( query ) ]: map( crumbs, 'id' )
			};
	}

	return state;
}

export default combineReducers( {
	requestingQuery,
	items,
	queries
} );
