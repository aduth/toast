/**
 * External dependencies
 */
import pure from 'recompose/pure';

function DocumentHead( { title } ) {
	let nextTitle = window.toast.site.name;
	if ( title ) {
		nextTitle = title + ' - ' + nextTitle;
	}

	document.title = nextTitle;
}

export default pure( DocumentHead );
