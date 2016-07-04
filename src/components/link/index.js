/**
 * External dependencies
 */
import { h } from 'preact';
import { connect } from 'preact-redux';
import { navigate } from 'redux-routing';

function Link( props ) {
	function onNavigate( event ) {
		props.dispatch( navigate( props.href ) );
		event.preventDefault();
	}

	return <a { ...props } onClick={ onNavigate } />;
}

export default connect()( Link );
