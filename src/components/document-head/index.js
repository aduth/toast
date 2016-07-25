/**
 * Internal dependencies
 */
import { SITE_NAME } from 'config';

export default function DocumentHead( { title } ) {
	let nextTitle = SITE_NAME;
	if ( title ) {
		nextTitle = title + ' - ' + nextTitle;
	}

	if ( document.title !== nextTitle ) {
		document.title = nextTitle;
	}
}
