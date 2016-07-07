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

export function requestCrumbs() {
	return async ( dispatch ) => {
		dispatch( { type: CRUMBS_REQUEST } );
		const body = await fetch( `${ REST_URL }wp/v2/crumbs?_embed` );
		const crumbs = await body.json();
		dispatch( { type: CRUMBS_REQUEST_SUCCESS } );
		dispatch( receiveCrumbs( crumbs ) );
	};
}
