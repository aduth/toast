/**
 * External dependencies
 */
import { h } from 'preact';

/**
 * Internal dependencies
 */
import Navigation from 'layout/navigation';

export default function App( { children } ) {
	return (
		<main className="app">
			<Navigation />
			{ children }
		</main>
	);
}
