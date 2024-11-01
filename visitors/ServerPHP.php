<?php

if(version_compare(PHP_VERSION, '5.3.0', '<')) {
    exit('Your current PHP version is: ' . PHP_VERSION . '. and the PHP messaging library requires version 5.3 or later');
};

// function used to check required params
// returns the param value or exit with an appropriate error message
function getRequiredParam($paramName, $allowedValues)
{
	if (isset($_GET[$paramName]))
		return $_GET[$paramName];
	else
	{
		if (isset($_POST[$paramName]))
			return $_POST[$paramName];
		else
		{
			// separator is ? or &
			if ($_SERVER['QUERY_STRING'] == '')
				$getSeparator = '';
			else
				$getSeparator = '&';
			
			// build the error message
			$errorMessage = 'Missing param in the URL: \'' . $paramName . '\'<br /><br />'
				. 'Try <a href=\'?' . $_SERVER['QUERY_STRING'] . $getSeparator . $paramName . '=' . $allowedValues[0] 
				. '\'>this URL</a> for an example of use.<br /><br />Values can be: <ul><li>' . implode('<li>', $allowedValues) .'</li></ul>.';

			// display error message
			echo $errorMessage;
			
			// exit
			exit();
		}
	}
	return NULL;
}

// define path for the library
$pharDir = realpath('../');
$pharFilePath = $pharDir.'/SLDialog.phar';
// if you want to use the "non phar" versuib $pharFilePath = $pharDir.'/server';
$libraryPath = "phar://".$pharFilePath.'/lib';

// include the library
include $libraryPath . '/org/phpMessaging/server/Server.class.php';
include $libraryPath . '/php/Boot.class.php';

// build a config object
/**/
$config = array(
	"dbHost" => "localhost", 
	"dbPort" => 3306, 
	"dbUser" => "root", 
	"dbPassword" => "root", 
	"dbName" => "php-messaging", 
	"longPollingDuration" => 5000, 
	"longPollingSleepDuration" => 100, 
	"clientTimeOut" => 2000, 
	"applicaitonTimeOut" => 20000, 
	"messageTimeOut" => 20000
	);
/**/
/*
$config = array(
	"dbHost" => "../sqlite/SLDialog.sqlite2", 
	"longPollingDuration" => 5000, 
	"longPollingSleepDuration" => 100, 
	"clientTimeOut" => 2000, 
	"applicaitonTimeOut" => 20000, 
	"messageTimeOut" => 20000
	);
/**/
	
// retrieve the action to perform from the parameters
$actionParram = getRequiredParam('sld_action', Array("poll", "dispatch", "setClientMetaData", "getClientMetaData", "setApplicationMetaData", "getApplicationMetaData", "getClients"));


// create a messaging server instance
$server = new org_phpMessaging_server_purePHP_Server($config);

// do the required action
$response = NULL;
switch ($actionParram)
{
	case 'poll':
		// get the application and metadata passed by the client	
		$applicationName = getRequiredParam('applicationName', Array("any name you want"));
		$instanceName = getRequiredParam('instanceName', Array("any name you want"));

		$metaData = getRequiredParam('metaData', Array('{"key1":"value1","key2":"value2"}'));
		$metaData = json_decode(stripslashes($metaData));

		$response = $server->poll($applicationName, $instanceName, $metaData);
		break;
		
	case 'dispatch':
		// to do: dispatch(params : Dynamic, ?idClients : Array<Int>, ?type : String) : Void
		$metaData = getRequiredParam('metaData', Array('"key1":"value1","key2":"value2"'));
		$metaData = json_decode(stripslashes($metaData));
		$response = $server->dispatch(_hx_anonymous($metaData), NULL, "TYPE_CLIENT_DISPATCH");
		break;
		
	case 'setClientMetaData':
		$name = getRequiredParam('name', Array("name of the metadata"));
		$value = getRequiredParam('value', Array("value of the metadata"));
		$response = $server->setClientMetaData($name, $value);
		break;

	case 'getClientMetaData':
		$name = getRequiredParam('name', Array("name of the metadata"));
		$response = $server->getClientMetaData($name);
		break;
	case 'setApplicationMetaData':
		$name = getRequiredParam('name', Array("name of the metadata"));
		$value = getRequiredParam('value', Array("value of the metadata"));
		$response = $server->setApplicationMetaData($name, $value);
		break;
	case 'getApplicationMetaData':
		$name = getRequiredParam('name', Array("name of the metadata"));
		$response = $server->getApplicationMetaData($name);
		break;
	
	case 'getClients':
		// to do getClients(?clientIDs : Array<Int>) : List<org.phpMessaging.model.ClientDataModel>
		$response = $server->getClients(NULL);
		break;
}

// return the result
// here response is a MessageData object, see http://php-polling.sourceforge.net/developer_guide_server/
if (isset ($response))
	echo json_encode(($response));
else
	echo 'Done.<br />';

?>