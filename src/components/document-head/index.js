/**
 * External dependencies
 */
import pure from 'recompose/pure';

/**
 * Internal dependencies
 */
import { SITE_NAME } from 'config';

function DocumentHead( { title } ) {
	let nextTitle = SITE_NAME;
	if ( title ) {
		nextTitle = title + ' - ' + nextTitle;
	}

	document.title = nextTitle;
}

export default pure( DocumentHead );
