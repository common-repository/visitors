/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.nativeClass.as3;

import haxe.Log;
import org.silex.runtime.nativeClass.NativeInstanceBase;

/**
 * This is the implementation of the native instance proxy for Flash. It implemenents
 * a class instantiation method specific to the Flash runtime
 * @author Yannick DOMINGUEZ
 */
class NativeInstance extends NativeInstanceBase
{
	/**
	 * class constructor
	 */
	public function new(nativeInstanceClassName:String) 
	{
		super(nativeInstanceClassName);
		
		//instantiate the native Flash class and store a reference to it
		var classReference:Class<Dynamic> = Type.resolveClass(nativeInstanceClassName);
		_refToNativeClassInstance = Type.createInstance(classReference, new Array());
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden proxy method to add Flash specific behaviour. Used to prevent 
	// runtime error from being thrown in Flash
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * check if a function exists on the class instance. Must rely on Type.getInstanceField to check if
	 * the method exists, as Reflect.hasField only works for dynamic attributes and only return false for 
	 * class attributes/methods.
	 * 
	 * @param functionName the name of the searched method
	 * @return
	 */
	override public function isFunction(functionName:String):Bool
	{
		//retrieve all the static native class fields
		var instanceFields:Array<String> = Type.getInstanceFields(Type.getClass(_refToNativeClassInstance));
		var numInstanceFields:Int = instanceFields.length;
		
		//loop in the fields to find a match for the method name
		for (i in 0...numInstanceFields)
		{
			if (instanceFields[i] == functionName)
			{
				//a field with the right name exists,
				//test if it is a function
				return super.isFunction(functionName);
			}
		}

		//the method does not exist
		return false;
	}
	
}