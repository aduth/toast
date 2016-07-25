/**
 * External dependencies
 */
import { map } from 'lodash';

export default function getCrumbs( state, query ) {
	const { queries, items } = state.crumbs;
	const itemIds = queries[ JSON.stringify( query ) ];

	return map( itemIds, ( id ) => items[ id ] );
}
