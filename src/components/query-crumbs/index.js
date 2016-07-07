/**
 * External dependencies
 */
import { Component } from 'preact';
import { connect } from 'preact-redux';

/**
 * Internal dependencies
 */
import { requestCrumbs } from 'state/crumbs/actions';
import { isRequestingCrumbs } from 'state/selectors';

class QueryCrumbs extends Component {
	componentWillMount() {
		if ( ! this.props.requesting ) {
			this.props.requestCrumbs();
		}
	}

	render() {
		return null;
	}
}

export default connect(
	( state ) => {
		return {
			requesting: isRequestingCrumbs( state )
		};
	},
	{ requestCrumbs }
)( QueryCrumbs );
