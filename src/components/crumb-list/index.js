/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { getCrumbs } from 'state/selectors';
import QueryCrumbs from 'components/query-crumbs';
import Crumb from 'components/crumb';

function CrumbList( { crumbs } ) {
	return (
		<ul className="crumb-list">
			<QueryCrumbs />
			{ map( crumbs, ( { id } ) => (
				<li key={ id }><Crumb id={ id } /></li>
			) ) }
		</ul>
	);
}

export default connect( ( state ) => {
	return {
		crumbs: getCrumbs( state )
	};
} )( CrumbList );