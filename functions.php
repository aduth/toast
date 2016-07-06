<?php

function toast_register_post_type() {
	register_post_type( 'crumb', array(
		'label' => __( 'Crumb', 'toast' ),
		'description' => __( 'A single shared pinboard item', 'toast' ),
		'labels' => array(
			'name' => __( 'Crumbs', 'toast' ),
			'singular_name' => __( 'Crumb', 'toast' ),
			'parent_item_colon' => __( 'Parent Crumb:', 'toast' ),
			'all_items' => __( 'All Items', 'toast' ),
			'add_new_item' => __( 'Add New Crumb', 'toast' ),
			'new_item' => __( 'New Crumb', 'toast' ),
			'edit_item' => __( 'Edit Crumb', 'toast' ),
			'update_item' => __( 'Update Crumb', 'toast' ),
			'view_item' => __( 'View Crumb', 'toast' ),
			'search_items' => __( 'Search Crumbs', 'toast' ),
			'insert_into_item' => __( 'Insert into crumb', 'toast' ),
			'uploaded_to_this_item' => __( 'Uploaded to this crumb', 'toast' ),
			'items_list' => __( 'Crumbs list', 'toast' ),
			'items_list_navigation' => __( 'Crumbs list navigation', 'toast' ),
			'filter_items_list' => __( 'Filter crumbs list', 'toast' )
		),
		'supports' => array(
			'title',
			'editor',
			'author',
			'thumbnail',
			'comments'
		),
		'taxonomies' => array( 'crumb_tag' ),
		'hierarchical' => false,
		'public' => true,
		'menu_icon' => 'dashicons-image-filter',
		'show_in_rest' => true
	) );

	register_taxonomy( 'crumb_tag', 'crumb', array(
		'hierarchical' => false,
		'labels' => array(
			'name' => __( 'Crumb Tags', 'toast' ),
			'singular_name' => __( 'Crumb Tag', 'toast' ),
			'search_items' => __( 'Search Crumb Tags', 'toast' ),
			'all_items' => __( 'All Crumb Tags', 'toast' ),
			'parent_item' => __( 'Parent Crumb Tag', 'toast' ),
			'parent_item_colon' => __( 'Parent Crumb Tag:', 'toast' ),
			'edit_item' => __( 'Edit Crumb Tag', 'toast' ),
			'update_item' => __( 'Update Crumb Tag', 'toast' ),
			'add_new_item' => __( 'Add New Crumb Tag', 'toast' ),
			'new_item_name' => __( 'New Crumb Tag Name', 'toast' ),
			'menu_name' => __( 'Crumb Tag', 'toast' )
		),
		'public' => true,
		'rewrite' => array( 'slug' => 'crumb-tag' ),
	) );
}
add_action( 'init', 'toast_register_post_type' );

function toast_after_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5' );
	add_theme_support( 'post-thumbnails', array( 'crumb' ) );
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
