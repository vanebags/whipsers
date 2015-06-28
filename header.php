<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Whispers of the Oracle</title>
	<link rel="stylesheet" href="<?php echo TPL_DIR ?>/styles/css/styles.css">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div id="header" class="clearfix">
	<div class="wrapper clearfix">
		<a href="<?php bloginfo('url') ?>"><h1 id="logo">Whispers of The Oracle</h1></a>
		<?php wp_nav_menu(array(
			'menu' 		=> 'main',
			'menu_id' 	=> 'nav'
		)); ?>
	</div>
</div>