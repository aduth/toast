<?php

function toast_after_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5' );
}
add_action( 'after_setup_theme', 'toast_after_theme_setup' );

function toast_enqueue_scripts() {
	$is_dev = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
	$theme_dir = get_template_directory_uri();

	// Scripts
	$script = $theme_dir . ( $is_dev ? '/dev-bundle.js' : '/dist/app.min.js' );
	wp_enqueue_script( 'toast-bundle', $script, null, null, true );
	wp_localize_script( 'toast-bundle', 'toast', array(
		'site' => array(
			'name' => get_bloginfo( 'name', 'display' )
		)
	) );

	// Styles
	if ( ! $is_dev ) {
		wp_enqueue_style( 'toast-styles', $theme_dir . '/dist/app.min.css' );
	}
}
add_action( 'wp_enqueue_scripts', 'toast_enqueue_scripts' );
