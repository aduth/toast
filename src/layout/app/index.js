/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import MasterBar from 'layout/master-bar';

export default function App( { children } ) {
	return (
		<main className="app">
			<MasterBar />
			<div className="app__content">
				{ children }
			</div>
		</main>
	);
}
