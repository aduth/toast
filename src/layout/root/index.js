/**
 * External dependencies
 */
import { h } from 'preact';
import { Provider, connect } from 'preact-redux';
import { match } from 'redux-routing';

/**
 * Internal dependencies
 */
import routes from 'routes';
import App from 'layout/app';

function Root( { Route, store } ) {
	return (
		<Provider store={ store }>
			<App><Route /></App>
		</Provider>
	);
}

export default connect( ( { route } ) => {
	const { handler: Route } = match( route.href, routes );
	return { Route };
} )( Root );
