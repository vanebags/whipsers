<?php

define('TPL_DIR', get_template_directory_uri());
define('JS_DIR', TPL_DIR.'/js');


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
