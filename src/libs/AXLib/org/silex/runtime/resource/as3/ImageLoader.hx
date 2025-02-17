/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.resource.as3;

import flash.display.Loader;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.net.URLRequest;
import flash.system.ApplicationDomain;
import flash.system.LoaderContext;

import org.silex.runtime.domObject.DOMObject;
import org.silex.runtime.domObject.ImageDOMObject;
import org.silex.runtime.resource.ResourceLoader;
import org.silex.runtime.resource.ResourceData;

/**
 * This is the Image loader implementation for the Flash runtime. It is used to 
 * load pictures that will be attached to the DOM. It loads the picture with
 * a native flash loader, then attach the content of the loader as the native 
 * DOMObject of an Image DOMObject instance
 * 
 * @author Yannick DOMINGUEZ
 */
class ImageLoader extends ResourceLoader
{
	/**
	 * The native flash skin loader
	 */
	private var _imageLoader:Loader;
	
	/**
	 * class constructor
	 */
	public function new() 
	{
		super();
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden method to implement Flash AS3 specific behaviour
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Load a .swf file using a native ActionScript3 Loader object
	 * @param	url the url of the AS3 .swf to load
	 */
	override private function doLoad(url:String):Void
	{
		//instantiate a native Flash loader
		_imageLoader = new Loader();
		
		//listen for complete/error event on the loader
		_imageLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, onImageLoadComplete);
		_imageLoader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, onImageLoadIOError);
		
		//instantiate a native request object
		var request:URLRequest = new URLRequest(url);
		
		//add a loading context so that the classes will be loaded in the current context
		var loadingContext:LoaderContext = new LoaderContext(false, ApplicationDomain.currentDomain);
		
		//start the loading
		_imageLoader.load(request, loadingContext);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Native loading callbacks
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * When the .swf has been loaded, remove the listener on it, 
	 * instantiate an image DOMObject and set the loaded picture
	 * as it's native DOMObject,
	 * then call the load complete method
	 * @param	event the Complete event, contains the native Loader
	 */
	private function onImageLoadComplete(event:Event):Void
	{
		_imageLoader.contentLoaderInfo.removeEventListener(Event.COMPLETE, onImageLoadComplete);
		_imageLoader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR, onImageLoadIOError);
		
		var imageDOMObject:DOMObject = new ImageDOMObject(_imageLoader);
		
		onLoadComplete(imageDOMObject);
	}
	
	/**
	 * when there was an error during loading, call the error callback with the
	 * the message error, remove the event listeners
	 * @param	event the IO_ERROR event, containd info on the error
	 */
	private function onImageLoadIOError(event:IOErrorEvent):Void
	{
		_imageLoader.contentLoaderInfo.removeEventListener(Event.COMPLETE, onImageLoadComplete);
		_imageLoader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR, onImageLoadIOError);
		
		onLoadError(event.toString());
	}
}