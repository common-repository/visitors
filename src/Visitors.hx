package ;

import org.silex.runtime.domObject.ImageDOMObject;
import org.silex.runtime.domObject.NativeDOMObject;
import org.silex.runtime.domObject.ContainerDOMObject;
import org.silex.runtime.domObject.TextDOMObject;

import org.silex.runtime.resource.ResourceData;
import org.silex.runtime.resource.ResourceLoader;
import org.silex.runtime.resource.ResourceLoaderManager;

//import thx.json.Json;
import hxjson2.JSONDecoder;


class Visitors
{
	/////////////////////////////////////////////////
	// application entry point
	/////////////////////////////////////////////////
	/**
	 * main application instance
	 */
	private static var _visitors : Visitors;
	/**
	 * application entry point
	 */
	public static function main()
	{
		_visitors = new Visitors();
	}	
	
	/////////////////////////////////////////////////
	// application main class
	/////////////////////////////////////////////////
	/**
	 * root dom object
	 */
	private var _containerDOMObject : ContainerDOMObject;
	/**
	 * text field of the display
	 */
	private var _textDOMObject : TextDOMObject;
	/**
	 * text field of the display
	 */
	private var _imageDOMObject : ImageDOMObject;
	/**
	 * number of connected users
	 */
	private var _numberOfUsers : Int;
		
	/**
	 * constructor
	 */
	public function new()
	{
		firstTime = true;
		_numberOfUsers = 0;
		
		// get the native container for the display
		var nativeDOMObject : NativeDOMObject;	

#if flash9
		flash.system.Security.allowDomain('*');
		nativeDOMObject = flash.Lib.current;
		_applicationName = flash.Lib.current.loaderInfo.parameters.applicationName;
		_instanceName = flash.Lib.current.loaderInfo.parameters.instanceName;
		ROOT_URL = flash.Lib.current.loaderInfo.url.substr(0, flash.Lib.current.loaderInfo.url.lastIndexOf("/"));
		
#elseif js

		nativeDOMObject = js.Lib.document.getElementById("VisitorsDIV");
		_applicationName = untyped __js__("$jsvars.applicationName");
		_instanceName = untyped __js__("$jsvars.instanceName");
		ROOT_URL = untyped __js__("window.location.href.toString()");
		

#end
		// create the root DOM object
		_containerDOMObject = new ContainerDOMObject(nativeDOMObject);
		
		// build the GUI
		_guiBuild();
		
		// start polling
		_poll();
	}
	
	/**
	 * build the user interface for the application
	 */
	private function _guiBuild()
	{
		// load background image
		ResourceLoaderManager.loadImage("assets/bg.png", _bgImageLoadedCallback, _loadingErrorCallback);
		
		// create text
		_textDOMObject = new TextDOMObject();

//		new haxe.Timer(500).run = onTimer;

	}
	function onTimer()
	{
		//trace("TIMER "+_textDOMObject.x);
		_textDOMObject.x += 10;
		_textDOMObject.y += 10;
	}
	/**
	 * callback for resource loading errors
	 */
	private function _loadingErrorCallback(message : String)
	{
		trace("ERROR LOADING RESOURCE - " + message);
	}
	/**
	 * callback called when the resource is successfully loaded
	 */
	private function _bgImageLoadedCallback(imageDOMObject : ImageDOMObject)
	{
		trace("bg image loaded "+imageDOMObject.width + " - "+_textDOMObject.width+" - "+_applicationName);
		
		_containerDOMObject.addChild(imageDOMObject);
		_containerDOMObject.addChild(_textDOMObject);
		
		_imageDOMObject = imageDOMObject;
		//_imageDOMObject.x = 500;
		
		redraw();
	}
	/////////////////////////////////////////////////
	// messaging functionality
	/////////////////////////////////////////////////
	/**
	 * server side messaging application instance name
	 * read from flashvars (swf9) or $jsvars (js)
	 */
	private static var _instanceName : String;
	/**
	 * server side messaging application instance name
	 * read from flashvars (swf9) or $jsvars (js)
	 */
	private static var _applicationName : String;
	/**
	 * resource loader used for polling
	 */
//	public static inline var SERVER_URL:String = "/SLDialog/chat_sample/ServerPHP.php?";
	public static inline var SERVER_URL:String = "/ServerPHP.php?";
	public static var ROOT_URL:String;
	private var firstTime : Bool;

	/**
	 * start polling
	 */
	private function _poll()
	{
		var params : String = "action=poll&applicationName=" + _applicationName 
			+ "&instanceName=" + _instanceName
			+ "&metaData={\"displayName\":\"TESTMETADATA\"}";
		ResourceLoaderManager.loadString(ROOT_URL + SERVER_URL + params, _pollingSuccessCallback, _pollingErrorCallback);
	}
	/**
	 * callback for polling errors
	 */
	private function _pollingErrorCallback(message : String)
	{
		trace("ERROR POLLING - " + message);
	}
	/**
	 * callback called each time polling has stopped
	 */
	private function _pollingSuccessCallback(message : String)
	{
		trace("Polling returned " + message);
		
		if (firstTime == true)
		{
			firstTime = false;
			connectionSuccess();
		}
		if (message != "" && message != "Done.<br />")
		{
			onStatus(new JSONDecoder(message, false).getValue());
		}
		haxe.Timer.delay(_poll, 10);
	}
	/**
	 * now connected
	 */
	public function connectionSuccess()
	{
		trace("connectionSuccess");
		var params : String = "action=getClients&";
		ResourceLoaderManager.loadString(ROOT_URL + SERVER_URL + params, _getClientsMetaData, _pollingErrorCallback);
	}
	/**
	 * incomming message
	 */
	public function onStatus(message)
	{
		trace("onStatus " + message.type);
		if (message.type == "TYPE_NEW_CLIENT")
			_numberOfUsers ++;
		else if (message.type == "TYPE_CLIENT_DELETED")
			_numberOfUsers --;

		redraw();
	}
	/**
	 * clients list
	 */
	private function _getClientsMetaData(message : String) 
	{
		var clients = new JSONDecoder(message, false).getValue();
		
		_numberOfUsers = clients.length;
		redraw();
	}
	/**
	 * redraw
	 */
	public function redraw()
	{
		_textDOMObject.text = _numberOfUsers + " users on this page";
		
		_textDOMObject.x = _imageDOMObject.x;
		_textDOMObject.y = _imageDOMObject.y;
		_textDOMObject.width = _imageDOMObject.width;
		_textDOMObject.height = _imageDOMObject.height;
	}
}