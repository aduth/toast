/**
 * External dependencies
 */
import { Component } from 'preact';
import { connect } from 'preact-redux';
import { isEqual } from 'lodash';

/**
 * Internal dependencies
 */
import { requestCrumbs } from 'state/crumbs/actions';
import { isRequestingCrumbs } from 'state/selectors';

class QueryCrumbs extends Component {
	componentWillMount() {
		this.request( this.props );
	}

	componentWillReceiveProps( nextProps ) {
		if ( ! isEqual( this.props.query, nextProps.query ) ) {
			this.request( nextProps );
		}
	}

	request( props ) {
		if ( props.requesting ) {
			return;
		}

		props.requestCrumbs( props.query );
	}

	render() {
		return null;
	}
}

export default connect(
	( state, { query } ) => {
		return {
			requesting: isRequestingCrumbs( state, query )
		};
	},
	{ requestCrumbs }
)( QueryCrumbs );
