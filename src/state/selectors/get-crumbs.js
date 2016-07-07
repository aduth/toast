/**
 * External dependencies
 */
import { values } from 'lodash';

export default function getCrumbs( state ) {
	return values( state.crumbs.items );
}
