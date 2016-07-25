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

function CrumbList( { crumbs, query } ) {
	return (
		<ul className="crumb-list">
			<QueryCrumbs query={ query } />
			{ map( crumbs, ( { id } ) => (
				<li key={ id }><Crumb id={ id } /></li>
			) ) }
		</ul>
	);
}

export default connect( ( state, { query } ) => {
	return {
		crumbs: getCrumbs( state, query )
	};
} )( CrumbList );
