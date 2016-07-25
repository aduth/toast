/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import DocumentHead from 'components/document-head';
import CrumbList from 'components/crumb-list';
import { getCurrentRouteQuery } from 'state/selectors';

function Home( { search } ) {
	return (
		<div>
			<DocumentHead title="" />
			<CrumbList query={ { 'filter[s]': search } } />
		</div>
	);
}

export default connect( ( state ) => {
	return {
		search: getCurrentRouteQuery( state, 's' )
	};
} )( Home );
