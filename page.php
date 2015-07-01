<?php get_header(); ?>

<div id="main" class="wrapper">
	<div id="content" class="clearfix">
		<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; endif; ?>
	</div>
</div>

<?php get_footer(); ?>
