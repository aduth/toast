<?php

function toast_after_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5' );
}
add_action( 'after_setup_theme', 'toast_after_theme_setup' );

function toast_enqueue_scripts() {
	$is_dev = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
	$asset_base = get_template_directory_uri() . '/dist';

	// Scripts
	$script = $asset_base . '/app' . ( $is_dev ? '' : '.min' ) . '.js';
	wp_enqueue_script( 'toast-bundle', $script, null, null, true );

	// Styles
	if ( ! $is_dev ) {
		wp_enqueue_style( 'toast-styles', $asset_base . '/app.min.css' );
	}
}
add_action( 'wp_enqueue_scripts', 'toast_enqueue_scripts' );
