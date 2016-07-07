/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { getCrumb } from 'state/selectors';

function Crumb( { crumb } ) {
	const { title } = crumb;

	return (
		<div className="crumb">
			{ title.rendered }
		</div>
	);
}

export default connect( ( state, ownProps ) => {
	return {
		crumb: getCrumb( state, ownProps.id )
	};
} )( Crumb );
