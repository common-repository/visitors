<?php

/*
This project is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

class VisitorsWidget extends WP_Widget {

    function VisitorsWidget() {
    	$name = 'visitors';
		parent::WP_Widget(false, $name,
						  array('description' => "displays the number of visitors currently viewing the page."));
    }

    function widget($args, $instance) {
		global $wpdb;
		
        // extract( $args );
        $title = apply_filters('widget_title', $instance['title']);
		echo $before_widget;

		if ($title) {
			echo $before_title . $title . $after_title;
		}

		$opts = get_option('visitors_options');
		$width = $opts['widget_width'];
		echo "<a style=\"text-decoration: none;\" ";
		echo "href=\"$visitors_site/$id/\" title=\"Click for more details!  Visitors widget by Silex Labs\">";

?>
<div id="visitors_widget">
		<DIV id="haxe:trace"></DIV>
		<DIV id="VisitorsDIV"></DIV>
		<script type="text/javascript">
			$jsvars = {};
			$jsvars.applicationName = "Application Name";
			$jsvars.instanceName = "Instance Name";
			$jsvars.relativePath = "wp-content/plugins/visitors/";
		</script>
		<script type="text/javascript" src="wp-content/plugins/visitors/Visitors.js"></script>
</div>
</a>
<?php
		echo $after_widget;
	}

    function update($new_instance, $old_instance) {
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
        return $instance;
    }

    function form($instance) {
        $title = esc_attr($instance['title']);
        ?>
        <p>
         Visitors widget
        </p>
        <?php
	}

}

add_action('widgets_init', create_function('', 'return register_widget("VisitorsWidget");'));


function visitors_widgets_style() {
		?>
<style type="text/css">
div.widget[id*=_visitorswidget] .widget-title {
  background-color: #ffebe8;
}
#widget-list div.widget[id*=_visitorswidget] .widget-top {
  border-color: #c00;
}
#wp_inactive_widgets div.widget[id*=_visitorswidget] {
  border-color: #c00;
}
</style>
<?php
}

add_action('admin_print_styles-widgets.php', 'visitors_widgets_style');
