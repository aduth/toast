/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getCurrentRoute } from 'state/selectors';

export default function getCurrentRouteQuery( state, query ) {
	return get( getCurrentRoute( state ), [ 'query', query ], null );
}
