( function() {
	var sources;

	function getCurrentScriptDirectory() {
		var scripts = document.getElementsByTagName( 'script' ),
			src = scripts[ scripts.length - 1 ].src;

		return src.substr( 0, src.lastIndexOf( '/' ) );
	}

	sources = [
		'http://localhost:3000',
		getCurrentScriptDirectory() + '/dist'
	];

	function tryNextSource() {
		var source = sources.shift(),
			script;

		if ( ! source ) {
			return;
		}

		script = document.createElement( 'script' );
		script.src = source + '/app.js';
		script.onerror = tryNextSource;
		document.body.appendChild( script );
	}

	tryNextSource();
} )();
