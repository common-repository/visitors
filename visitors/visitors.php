<?php
/*
Plugin Name: visitors
Plugin URI: 
Description: This plugin is a live hit counter, which displays the number of visitors currently viewing the current page, and the ones currently viewing one page of the current WordPress or Buddy Press site. It is a Widget plugin (WPW) so that you can drag and drop it anywhere on your site.
Tags: live,counter,viewer,real time
Requires at least: 2.8.1
Tested up to: 3.0.0
Stable tag: 1.0alpha1
Version: 1.0alpha1
Author: Silex Labs
Contributors: lexa
License: GPLv2 or later
*/
/*
This project is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/

$data = array('name' => get_option('blogname'),
			  'email' => get_option('admin_email'),
			  'url' => get_option('home'));

register_activation_hook(__FILE__, 'visitors_install');
function 	visitors_install() {
	$opts = get_option('visitors_options', array());

	if (!isset($opts['widget_width'])) {
		$opts['widget_width'] = 220;
	}
	if (!isset($opts['widget_color'])) {
		$opts['widget_color'] = 'F2EFE8';
	}
	if (!isset($opts['widget_bgcolor'])) {
		$opts['widget_bgcolor'] = '99B2CF';
	}
	if (!isset($opts['custom_color'])) {
		$opts['custom_color'] = 'F2EFE8';
	}
	if (!isset($opts['custom_bgcolor'])) {
		$opts['custom_bgcolor'] = '99B2CF';
	}
	if (!isset($opts['widget_type'])) {
		$opts['widget_type'] = 'plain';
	}

	update_option('visitors_options', $opts);
}
function visitors_is_installed()
{
	return TRUE;
}

function visitors_activate_notice() {
	if (substr($_SERVER["PHP_SELF"], -11) == 'plugins.php' && !visitors_is_installed()) {
		echo '<div class="error"><p><strong>Activate visitors on the <a href="';
		echo get_option('siteurl') . '/wp-admin/widgets.php';
		echo '">widget admin page</a>.  Check also the <a href="';
		echo get_option('siteurl') . '/wp-admin/options-general.php?page=visitors';
        echo '">settings page</a>.</strong></p></div>';
	} else if (substr($_SERVER["PHP_SELF"], -11) == 'widgets.php' && !visitors_is_installed()) {
	    echo '<div class="error"><p><strong>Drag a visitors widget (one is enough) to a sidebar on the right to activate.</p></div>';
	}
}

add_action('admin_notices', 'visitors_activate_notice');


function visitors_plugin_actions($links, $file) {
	if ($file == 'visitors/visitors.php') {
		$link = '<a href="'. get_option('siteurl') . '/wp-admin/options-general.php?page=visitors' . '">Settings</a>';
		array_unshift($links, $link);
	}
	return $links;
}

add_filter('plugin_action_links', 'visitors_plugin_actions', 10, 2);

/*
function visitors_widget() {
	$opts = get_option('visitors_options');
		?>
<script type="text/javascript" src="Visitors.js"></script>
<?php
}
add_action('wp_head', 'visitors_widget');
*/

require_once("visitors_widget.php");



add_action('wp_ajax_my_action', 'visitors_ajax_add_poll');
add_action('wp_ajax_nopriv_my_action', 'visitors_ajax_add_poll');
//add_action('wp_ajax_add_poll', 'visitors_ajax_add_poll');

function visitors_ajax_add_poll() {
    //Handle request then generate response using WP_Ajax_Response
    require_once ("ServerPHP.php");
}

