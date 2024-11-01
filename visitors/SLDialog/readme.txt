= License of this project =

This project is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html

= About this project =

see http://php-polling.sourceforge.net/

= The files included in this archive =

== SLDialog.phar ==

The php messaging library itself, packaged in a .phar archive for your convenience - which is a zip file, but you can include the php scripts contained in it, directly from php with an include directive.

Useful links 

  * source code of this file: http://php-polling.svn.sourceforge.net/viewvc/php-polling/trunk/src/
  * about .phar archives: http://php.net/manual/en/book.phar.php

In order to generate this archive from the source code:
  * checkout the source code ( https://php-polling.svn.sourceforge.net/svnroot/php-polling/trunk )
  * open the script deploy/generatePharLibrary.php in a browser (with http://, note file://)
  
== sql and sqlite ==

These folders contain the sql files or commands, which you need to run a SLDialog messaging server.

== chat_sample ==

This folder contains examples of chat rooms in pure JS/PHP, in haXe JS/PHP and with mySQL/sqlite data bases.

= Make the chat sample work =

Here is an online version of what you should see:
  * the chat_sample php script: http://demos.silexlabs.org/SLDialog/chat_sample/ServerPHP.php 
  * the chat_sample javascript script: http://demos.silexlabs.org/SLDialog/chat_sample/ClientJS/index.html

It can run out of the box with sqlite:
  * open chat_sample/ClientJS/ in a browser 
  * it will display a minimalist chat room, ask you for your name
  * then it connects to the sqlite data base which is a simple flat file
  
Open several browsers (Firefox, Chrome, Safari...) to see several people and test the chat. 

For this you need a web server installed with sqlite2 (also simply called sqlite) php extension, not sqlite3.

You can run the mySQL version, and for this you need to
  * have a mySQL database in which you create the required tables by executing the SQL instructions of the sql/*.sql files (open it with a text editor)
  * enter the data base settings in the file chat_sample/ServerHaxePHP/config.php (haxe PHP version) or in chat_sample/ServerPHP.php (pure PHP version)
  * open chat_sample/ClientHaxeJS/ or chat_sample/ClientJS/ in a browser 
 
Then it will happen the same thing as for the sqlite version

= Make a messaging server in PHP =

Download the library ".phar" and include it in your scripts

For example you can write 

> include 'phar://path/to/the/lib/SLDialog.phar';

See http://www.php.net/manual/en/phar.using.intro.php for more info

To create a config object do this

> $config = array(
	"dbHost" => "localhost", 
	"dbPort" => 3306, 
	"dbUser" => "root", 
	"dbPassword" => "", 
	"dbName" => "php-messaging", 
	"longPollingDuration" => 5000, 
	"longPollingSleepDuration" => 100, 
	"clientTimeOut" => 2000, 
	"applicaitonTimeOut" => 20000, 
	"messageTimeOut" => 20000
	);


And then use the Server class like this

> $server = new org_phpMessaging_server_purePHP_Server($config);

See the technical documentation - here are the links http://php-polling.sourceforge.net/
And also the sample scripts:
  * the chat_sample php script in chat_sample/ServerPHP.php 
  * the chat_sample javascript script in chat_sample/ClientJS/index.html

  
