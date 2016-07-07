/**
 * External dependencies
 */
import { values } from 'lodash';

export function isRequestingCrumbs( state ) {
	return state.crumbs.requestingAll;
}

export function getCrumbs( state ) {
	return values( state.crumbs.items );
}
