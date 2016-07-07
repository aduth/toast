/**
 * External dependencies
 */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { navigate } from 'state/route/actions';
import { getCurrentRoute } from 'state/selectors';

class MasterBar extends Component {
	constructor() {
		super( ...arguments );

		this.handleSearch = this.handleSearch.bind( this );
		this.setSearchValue = this.setSearchValue.bind( this );

		const search = get( this.props.route.query, 's', '' );
		this.state = { search };
	}

	handleSearch( event ) {
		const search = encodeURIComponent( this.state.search );
		this.props.navigate( `/?s=${ search }` );
		event.preventDefault();
	}

	setSearchValue( event ) {
		this.setState( {
			search: event.target.value
		} );
	}

	render() {
		return (
			<header className="master-bar">
				<form onSubmit={ this.handleSearch }>
					<input
						type="search"
						onChange={ this.setSearchValue }
						value={ this.state.search } />
				</form>
			</header>
		);
	}
}

export default connect( ( state ) => {
	return {
		route: getCurrentRoute( state )
	};
}, { navigate } )( MasterBar );
