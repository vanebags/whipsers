<?php
define('TPL_DIR', get_template_directory_uri());
define('JS_DIR', TPL_DIR.'/js');

remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

//Adding a hook to bootup the site
add_action('init', 'register_scripts');
add_action('init', 'load_scripts');

function register_scripts(){
	//wp_register_script( $handle, $src, $deps, $ver, $in_footer );
	wp_register_script('global', JS_DIR.'/global.js', array('jquery'));
	
}

function load_scripts(){
	if(is_admin()) return;
	wp_enqueue_script('jquery');
	wp_enqueue_script('global');
}

register_nav_menu('main', 'Main header menu');


function tpl_dir( $atts ){
	return TPL_DIR;
}

add_shortcode('tpl_dir', 'tpl_dir');