/*
This file is part of Silex - see http://projects.silexlabs.org/?/silex

Silex is © 2010-2011 Silex Labs and is released under the GPL License:

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html
*/
package org.silex.runtime.domObject.js;

import js.Dom;
import js.Lib;
import org.silex.runtime.domObject.base.GraphicDOMObjectBase;
import org.silex.runtime.domObject.DOMObjectData;
import org.silex.runtime.geom.GeomData;

/**
 * This is the JavaScript implementation of the graphic DOMObject.
 * It draws shape programatically onto a native Canvas object
 * @author Yannick DOMINGUEZ
 */
class GraphicDOMObject extends GraphicDOMObjectBase
{
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Caps style JavaScript values
	//////////////////////////////////////////////////////////////////////////////////////////
	
	private static inline var CAPS_STYLE_VALUE_NONE:String = "butt";
	
	private static inline var CAPS_STYLE_VALUE_ROUND:String = "round";
	
	private static inline var CAPS_STYLE_VALUE_SQUARE:String = "square";
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Joint style JavaScript values
	//////////////////////////////////////////////////////////////////////////////////////////
	
	private static inline var JOINT_STYLE_VALUE_ROUND:String = "round";
	
	private static inline var JOINT_STYLE_VALUE_MITER:String = "miter";
	
	private static inline var JOINT_STYLE_VALUE_BEVEL:String = "bevel";
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Canvas pattern repeat values
	//////////////////////////////////////////////////////////////////////////////////////////
	
	private static inline var CANVAS_PATTERN_REPEAT:String = "repeat";
	
	private static inline var CANVAS_PATTERN_NO_REPEAT:String = "no-repeat";
	
	/**
	 * class constructor
	 */
	public function new(referenceToNativeDOMObject:HtmlDom = null) 
	{
		//create a canvas if none is provided
		if (referenceToNativeDOMObject == null)
		{
			referenceToNativeDOMObject = Lib.document.createElement("canvas");
		}
		
		super(referenceToNativeDOMObject);
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden getter/setter
	// The width and height setter/getter are overriden, because width and height
	// are attributes of the Canvas tag and not styles
	//////////////////////////////////////////////////////////////////////////////////////////
	
	override public function setWidth(value:Int):Int
	{
		untyped this._referenceToNativeDOM.width = value;
		return value;
	}
	
	override public function getWidth():Int 
	{
		return untyped Std.parseInt(this._referenceToNativeDOM.width);
	}
	
	override public function setHeight(value:Int):Int 
	{
		untyped this._referenceToNativeDOM.height = value;
		return value;
	}
	
	override public function getHeight():Int 
	{
		return untyped Std.parseInt(this._referenceToNativeDOM.height);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden fill control methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Set the native Canvas fill style and line style
	 * @param	fillStyle
	 * @param	lineStyle
	 */
	override public function beginFill(fillStyle:FillStyleValue, lineStyle:LineStyleValue):Void
	{
		super.beginFill(fillStyle, lineStyle);
		
		//set fill style
		setFillStyle(fillStyle);
		
		//set line style
		setLineStyle(lineStyle);
		
		var canvasContext:Dynamic = getContext();
		
		//start path drawing, used when drawing with lineTo/moveto/curveTo
		canvasContext.beginPath();
	}
	
	/**
	 * Ends a fill on the Canvas graphic object, filling and stroking
	 * the drawn path
	 */
	override public function endFill():Void
	{
		var canvasContext:Dynamic = getContext();
		
		//close the path else the stroke won't cover all the drawn path
		canvasContext.closePath();
		
		canvasContext.fill();
		canvasContext.stroke();
	}
	
	/**
	 * Clears the Canvas
	 */
	override public function clear():Void
	{
		var canvasContext:Dynamic = getContext();
		
		//clears a rect with the size of this DOMObject
		canvasContext.clearRect(0, 0, getWidth(), getHeight());
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Private fill control methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Do set the fill style on the canvas
	 */
	private function setFillStyle(fillStyle:FillStyleValue):Void
	{
		//get the canvas context to drawn on it
		var canvasContext:Dynamic = getContext();
		
		switch(fillStyle)
		{
			//if no fillstyle is defined (probably only stroke), set a transparent fill style
			case none:
				canvasContext.fillStyle = "rgba(0,0,0,0)";
			
			//for one-color with alpha fill, set the color as rgba
			case monochrome(colorStop):
				canvasContext.fillStyle = colorStopToRGBA(colorStop);
			
			//for gradient fill, create the gradient and set it
			case gradient(gradientStyle):
				canvasContext.fillStyle = getGradient(gradientStyle);
			
			//for bitmap fill, create a canvas pattern from an image DOMObject
			case bitmap(imageDOMObject, repeat):
				canvasContext.fillStyle = getCanvasPattern(imageDOMObject, repeat);
		}	
	}
	
	/**
	 * Do set the line style on the canvas
	 */
	private function setLineStyle(lineStyle:LineStyleValue):Void
	{
		//get the canvas context to drawn on it
		var canvasContext:Dynamic = getContext();
		
		switch(lineStyle)
		{
			//if there is no line style (probably only a fill), set a transparent line style
			case none:
				canvasContext.strokeStyle = "rgba(0,0,0,0)";
			
			//for a one-color line, set it's data and it's color as rgba
			case monochrome(colorStop, lineStyleData):
				initLineStyle(lineStyleData);
				canvasContext.strokeStyle = colorStopToRGBA(colorStop);
				
			//for gradient stroke, create the gradient and set it	
			case gradient(gradientStyle, lineStyleData):
				initLineStyle(lineStyleData);
				canvasContext.strokeStyle = getGradient(gradientStyle);
			
			//for bitmap stroke, create a canvas pattern from an image DOMObject
			case bitmap(imageDOMObject, lineStyleData, repeat):
				initLineStyle(lineStyleData);
				canvasContext.strokeStyle = getCanvasPattern(imageDOMObject, repeat);
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden High level pixel manipulation method
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Draw a bitmap extracted from an image dom object into the canvas.
	 */
	override public function drawImage(source:ImageDOMObject, destinationPoint:Point = null, sourceRect:Rectangle = null):Void
	{
		//init destination point and sourceRect if null
		
		if (destinationPoint == null)
		{
			destinationPoint = {
				x:0.0,
				y:0.0
			};
		}
		
		if (sourceRect == null)
		{
			var width:Float = source.width;

			var height:Float = source.height;

			sourceRect = {
				x:0.0,
				y:0.0,
				width:width,
				height:height
			};
		}
		
		var canvasContext:Dynamic = getContext();
		
		//draw the image with the Canvas API
	
		canvasContext.drawImage(
			source.getReferenceToNativeDOM(),
			sourceRect.x,
			sourceRect.y,
			sourceRect.width,
			sourceRect.height,
			destinationPoint.x,
			destinationPoint.y,
			sourceRect.width,
			sourceRect.height);

	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden low level drawing methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Use the native JavaScript lineTo method
	 */
	override public function lineTo(x:Float, y:Float):Void
	{
		var canvasContext:Dynamic = getContext();
		canvasContext.lineTo(x, y);
	}
	
	/**
	 * Use the native JavaScript moveTo method
	 */
	override public function moveTo(x:Float, y:Float):Void
	{
		var canvasContext:Dynamic = getContext();
		canvasContext.moveTo(x, y);
	}
	
	/**
	 * Use the native JavaScript quadraticCurveTo method
	 */
	override public function curveTo(controlX:Float, controlY:Float, x:Float, y:Float):Void
	{
		var canvasContext:Dynamic = getContext();
		canvasContext.quadraticCurveTo(controlX,controlY,x, y);
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Overriden utils conversion methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * in JavaScript rgba color space, alpha range from 0 to 1
	 */
	override private function toNativeAlpha(genericAlpha:Int):Dynamic
	{
		return genericAlpha * 0.01;
	}
	
	/**
	 * in a JavaScript gradient, color ratio range from 0 to 1
	 */
	override private function toNativeRatio(genericRatio:Int):Dynamic
	{
		return genericRatio * 0.01;
	}

	/**
	 * in JavaScript, caps styles are String
	 */
	override private function toNativeCapStyle(genericCapStyle:CapsStyleValue):Dynamic
	{
		var capStyle:String = "";
				
		switch(genericCapStyle)
		{
			case round:
				capStyle = CAPS_STYLE_VALUE_ROUND;
			
			case square:
				capStyle = CAPS_STYLE_VALUE_SQUARE;
			
			case none:
				capStyle = CAPS_STYLE_VALUE_NONE;
		}
		
		return capStyle;
	}
	
	/**
	 * in JavaScript, joint styles are String
	 */
	override private function toNativeJointStyle(genericJointStyle:JointStyleValue):Dynamic
	{
		var jointStyle:String = "";
				
		switch(genericJointStyle)
		{
			case miter:
				jointStyle = JOINT_STYLE_VALUE_MITER;
			
			case round:
				jointStyle = JOINT_STYLE_VALUE_ROUND;
				
			case bevel:
				jointStyle = JOINT_STYLE_VALUE_BEVEL;
		}
		
		return jointStyle;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	// Utils methods
	//////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * Convert a color stored as an Int and it's alpha to an rgba string
	 * @param	colorStop contains the color value and it's alpha
	 * @return an rgba string, used for CSS styling
	 */
	private function colorStopToRGBA(colorStop:ColorStopData):String
	{
		var rgb:RGB = hexToRGB(getHexColor(colorStop.color));
		return "rgba(" + rgb.red + "," + rgb.green + "," + rgb.blue + "," + toNativeAlpha(colorStop.alpha) + ")";
	}
	
	/**
	 * Convert an color stores as an int to its hexadecimal representation
	 * @return an hexa, starting with # and might be padded with 0
	 */
	private function getHexColor(color:Int):String
	{
		var hexColor:String = StringTools.hex(color);
		
		while (hexColor.length < 6)
		{
			hexColor = "0" + hexColor;
		}
		
		return "#"+hexColor;
	}
	
	/**
	 * Converts an hexadecimal to it's rgb representation
	 * @return an RGB typedef, with 3 value ranging from 0 to 255
	 */
	private function hexToRGB(hex:String):RGB
	{
		var hexCopy:String = hex;
		
		var hexCopy = hexCopy.substr(1);
		var rgb:RGB = {
			red: Std.parseInt("0x"+hexCopy.substr(0, 2)),
			green: Std.parseInt("0x"+hexCopy.substr(2, 2)),
			blue:Std.parseInt("0x"+hexCopy.substr(4,2))
		};
		
		return rgb;
	}
	
	/**
	 * Inits the line style of the canvas element, set all the 
	 * attributes of it but the stroke style
	 */
	private function initLineStyle(lineStyleData:LineStyleData):Void
	{
		var canvasContext:Dynamic = getContext();
		
		//thickness
		canvasContext.lineWidth = lineStyleData.thickness;
		
		//cap style
		canvasContext.lineCap = toNativeCapStyle(lineStyleData.capStyle);
		
		//joint style
		canvasContext.lineJoin = toNativeJointStyle(lineStyleData.jointStyle);
		
		//miter limit
		canvasContext.miterLimit = lineStyleData.miterLimit;
	}

	/**
	 * Return the 2d canvas context of the native Canvas element
	 */
	private function getContext():Dynamic
	{
		return untyped _referenceToNativeDOM.getContext("2d");
	}
	
	/**
	 * Create and return a JavaScript CanvasPattern object, used to draw
	 * picture on a canvas
	 * @param	imageDOMObject the imageDomObject whose native <img> element will create the 
	 * CanvasPattern
	 * @param	repeat whether to tile the CanvasPattern
	 */
	private function getCanvasPattern(imageDOMObject:DOMObject, repeat:Bool):Dynamic
	{
		var canvasContext:Dynamic = getContext();
		
		//wether to repeat the pattern if it's drawn
		//on a bigger surface than the target picture
		var repeatValue:String = "";
		if (repeat == true)
		{
			repeatValue = CANVAS_PATTERN_REPEAT;
		}
		
		else
		{
			repeatValue = CANVAS_PATTERN_NO_REPEAT;
		}
		
		//create the canvas pattern with the native image DOM element
		return canvasContext.createPattern(imageDOMObject.getReferenceToNativeDOM(), repeatValue);
	}
	
	/**
	 * Create and return a JavaScript CanvasGradient object, used to draw a gradient
	 * on the Canvas
	 */
	private function getGradient(gradientStyle:GradientStyleData):Dynamic
	{
		//will contain the gradient object
		var gradient:Dynamic = { };
		var canvasContext:Dynamic = getContext();
		
		//create the right gradient object, based on it's type
		switch (gradientStyle.gradientType)
		{
			case linear:
				
				//convert rotation to radian
				var gradientRadRotation = gradientStyle.rotation / 180 * Math.PI;
				
				//init the gradient coordinate, the gradient
				//will be drawn along this line, we will rotate
				//this line to match this gradient rotation
				//the starting point of the line is the left
				//of the canvas bounding box and the middle of it's height
				//the end point is right of the bounding box and the middle
				//of it's height
				var xStart:Float = 0;
				var yStart:Float = this.getHeight() / 2;
				var xEnd:Float = this.getWidth();
				var yEnd:Float = this.getHeight() / 2;
		
				//convert the starting point to the canvas center
				//geometric space (use the center as origin)
				xStart -= this.getWidth() / 2;
				yStart -= this.getHeight() / 2;
				
				
				//rotate the starting point with the rotation value of the gradient
				var rotatedStartX:Float = (xStart * Math.cos(gradientRadRotation)) - (yStart * Math.sin(gradientRadRotation));
				var rotatedStartY:Float = (xStart * Math.sin(gradientRadRotation)) + (yStart * Math.cos(gradientRadRotation));
				
				//convert back to canvas top-left geometric space
				rotatedStartX += this.getWidth() / 2;
				rotatedStartY += this.getHeight() / 2;
				
				//convert the end point to the canvas center
				//geometric space (use the center as origin)
				xEnd -= this.getWidth() / 2;
				yEnd -= this.getHeight() / 2;
				
				//rotate the end point with the rotation value of the gradient
				var rotatedEndX:Float = (xEnd * Math.cos(gradientRadRotation)) - (yEnd * Math.sin(gradientRadRotation));
				var rotatedEndY:Float = (xEnd * Math.sin(gradientRadRotation)) + (yEnd * Math.cos(gradientRadRotation));
				
				//convert back to canvas top-left geometric space
				rotatedEndX += this.getWidth() / 2;
				rotatedEndY += this.getHeight() / 2;
				
				//create the gradient
				gradient = canvasContext.createLinearGradient(rotatedStartX, rotatedStartY, rotatedEndX, rotatedEndY);
				
			case radial:
				gradient = canvasContext.createRadialGradient(this.getWidth()/2, this.getHeight() / 2, this.getWidth() /4, this.getWidth()/2, this.getHeight() / 2, this.getHeight() /2);
		}
		
		//get all the gradient stops data
		var gradientStops:Array<GradientStopData> = gradientStyle.gradientStops;
		
		
		//add all the color stops for the gradient
		for (i in 0...gradientStops.length)
		{
			gradient.addColorStop(toNativeRatio(gradientStops[i].ratio), colorStopToRGBA(gradientStops[i].colorStop));
		}
		
		return gradient;
		
	}
	
}