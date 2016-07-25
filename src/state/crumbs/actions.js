/**
 * External dependencies
 */
import { stringify } from 'querystring';

/**
 * Internal dependencies
 */
import { REST_URL } from 'config';
import {
	CRUMBS_RECEIVE,
	CRUMBS_REQUEST,
	CRUMBS_REQUEST_SUCCESS
} from 'state/action-types';

export function receiveCrumbs( crumbs ) {
	return {
		type: CRUMBS_RECEIVE,
		crumbs
	};
}

export function requestCrumbs( query = {} ) {
	return async ( dispatch ) => {
		dispatch( { type: CRUMBS_REQUEST, query } );
		const url = `${ REST_URL }wp/v2/crumbs?${ stringify( { ...query, _embed: '' } ) }`;
		const body = await fetch( url );
		const crumbs = await body.json();
		dispatch( { type: CRUMBS_REQUEST_SUCCESS, crumbs, query } );
		dispatch( receiveCrumbs( crumbs ) );
	};
}
