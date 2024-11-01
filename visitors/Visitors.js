$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof org=='undefined') org = {}
if(!org.silex) org.silex = {}
if(!org.silex.runtime) org.silex.runtime = {}
if(!org.silex.runtime.resource) org.silex.runtime.resource = {}
org.silex.runtime.resource.ResourceLoader = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.runtime.resource.ResourceLoader.__name__ = ["org","silex","runtime","resource","ResourceLoader"];
org.silex.runtime.resource.ResourceLoader.prototype._onLoadCompleteCallback = null;
org.silex.runtime.resource.ResourceLoader.prototype._onLoadErrorCallback = null;
org.silex.runtime.resource.ResourceLoader.prototype.load = function(url,onLoadComplete,onLoadError,allowCache) {
	this._onLoadCompleteCallback = onLoadComplete;
	this._onLoadErrorCallback = onLoadError;
	if(allowCache == false) {
		url = this.disableUrlCaching(url);
	}
	this.doLoad(url);
}
org.silex.runtime.resource.ResourceLoader.prototype.doLoad = function(url) {
	var fileRequest = new haxe.Http(url);
	fileRequest.onData = $closure(this,"onLoadComplete");
	fileRequest.onError = $closure(this,"onLoadError");
	fileRequest.request(false);
}
org.silex.runtime.resource.ResourceLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(data);
}
org.silex.runtime.resource.ResourceLoader.prototype.onLoadError = function(msg) {
	this._onLoadErrorCallback(msg);
}
org.silex.runtime.resource.ResourceLoader.prototype.disableUrlCaching = function(url) {
	var getId = "";
	if(url.indexOf("?") == -1) {
		getId = "?";
	}
	else {
		getId = "&";
	}
	url += getId + "rand=" + Math.round(Math.random() * 10000);
	return url;
}
org.silex.runtime.resource.ResourceLoader.prototype.__class__ = org.silex.runtime.resource.ResourceLoader;
if(!org.silex.runtime.resource.js) org.silex.runtime.resource.js = {}
org.silex.runtime.resource.js.AnimationLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.AnimationLoader.__name__ = ["org","silex","runtime","resource","js","AnimationLoader"];
org.silex.runtime.resource.js.AnimationLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.AnimationLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.AnimationLoader.prototype.__class__ = org.silex.runtime.resource.js.AnimationLoader;
if(!org.silex.runtime.domObject) org.silex.runtime.domObject = {}
if(!org.silex.runtime.domObject.base) org.silex.runtime.domObject.base = {}
org.silex.runtime.domObject.base.DOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	if(referenceToNativeDOMObject != null) {
		this._referenceToNativeDOM = referenceToNativeDOMObject;
		this.init();
	}
	this._children = new Array();
	this._matrix = new org.silex.runtime.geom.Matrix();
	this.setNativeListeners();
}}
org.silex.runtime.domObject.base.DOMObjectBase.__name__ = ["org","silex","runtime","domObject","base","DOMObjectBase"];
org.silex.runtime.domObject.base.DOMObjectBase.rootDOMObject = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onPress = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onDoubleClick = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onRelease = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onRollOver = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onRollOut = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onMouseMove = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onMouseWheel = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onFocusIn = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onFocusOut = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._referenceToNativeDOM = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._parent = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.parent = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._children = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.children = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._matrix = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.matrix = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._x = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.x = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._y = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.y = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._width = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.width = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype._height = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.height = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.alpha = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.isVisible = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.zOrder = null;
org.silex.runtime.domObject.base.DOMObjectBase.prototype.init = function() {
	null;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.addChild = function(domObject) {
	domObject.setParent(this);
	this._children.push(domObject);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.removeChild = function(domObject) {
	domObject.setParent(null);
	this._children.remove(domObject);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getParent = function() {
	return this._parent;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setParent = function(domObject) {
	this._parent = domObject;
	return this._parent;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getChildren = function() {
	return this._children;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setReferenceToNativeDOM = function(value) {
	this._referenceToNativeDOM = value;
	this.init();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getReferenceToNativeDOM = function() {
	return this._referenceToNativeDOM;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setIsVisible = function(value) {
	return value;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getIsVisible = function() {
	return false;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setAlpha = function(value) {
	return value;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getAlpha = function() {
	return 0;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setMatrix = function(matrix) {
	this._matrix = matrix;
	return this._matrix;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getMatrix = function() {
	return this._matrix;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.resetTransformations = function() {
	this._matrix.identity();
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getTransformationOriginPoint = function(transformationOrigin) {
	var transformationOriginPoint = { x : 0.0, y : 0.0};
	var $e = transformationOrigin;
	switch( $e[1] ) {
	case 1:
	var point = $e[2];
	{
		transformationOriginPoint = point;
	}break;
	case 0:
	var transformationOriginY = $e[3], transformationOriginX = $e[2];
	{
		var $e = transformationOriginX;
		switch( $e[1] ) {
		case 0:
		{
			transformationOriginPoint.x = 0;
		}break;
		case 1:
		{
			transformationOriginPoint.x = this.getWidth() / 2;
		}break;
		case 2:
		{
			transformationOriginPoint.x = this.getWidth();
		}break;
		}
		var $e = transformationOriginY;
		switch( $e[1] ) {
		case 0:
		{
			transformationOriginPoint.y = 0;
		}break;
		case 1:
		{
			transformationOriginPoint.y = this.getHeight() / 2;
		}break;
		case 2:
		{
			transformationOriginPoint.y = this.getHeight();
		}break;
		}
	}break;
	}
	return transformationOriginPoint;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.translate = function(x,y) {
	this._matrix.translate(x,y);
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setTranslationX = function(translationX) {
	this._matrix.setTranslationX(translationX);
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getTranslationX = function() {
	return this._matrix.getTranslationX();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setTranslationY = function(translationY) {
	this._matrix.setTranslationY(translationY);
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getTranslationY = function() {
	return this._matrix.getTranslationY();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.rotate = function(angle,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.rotate(angle,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setRotation = function(angle,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.setRotation(angle,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getRotation = function() {
	return this._matrix.getRotation();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.scale = function(scaleX,scaleY,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.scale(scaleX,scaleY,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setScaleX = function(scaleX,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.setScaleX(scaleX,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getScaleX = function() {
	return this._matrix.getScaleX();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setScaleY = function(scaleY,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.setScaleY(scaleY,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getScaleY = function() {
	return this._matrix.getScaleY();
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.skew = function(skewX,skewY,transformationOrigin) {
	if(transformationOrigin == null) {
		transformationOrigin = org.silex.runtime.geom.TransformationOriginValue.constant(org.silex.runtime.geom.TransformationOriginXValue.left,org.silex.runtime.geom.TransformationOriginYValue.top);
	}
	this._matrix.skew(skewX,skewY,this.getTransformationOriginPoint(transformationOrigin));
	this.setMatrix(this._matrix);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setAttribute = function(propertyName,propertyValue) {
	this._referenceToNativeDOM[propertyName] = propertyValue;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getAttribute = function(propertyName) {
	return Reflect.field(this._referenceToNativeDOM,propertyName);
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setNativeListeners = function() {
	null;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.unsetNativeListeners = function() {
	null;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativePress = function(event) {
	if(this.onPress != null) {
		this.onPress();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativeDoubleClick = function(event) {
	if(this.onDoubleClick != null) {
		this.onDoubleClick();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativeRelease = function(event) {
	if(this.onRelease != null) {
		this.onRelease();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativeRollOver = function(event) {
	if(this.onRollOver != null) {
		this.onRollOver();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativeRollOut = function(event) {
	if(this.onRollOut != null) {
		this.onRollOut();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.onNativeMouseMove = function(event) {
	if(this.onMouseMove != null) {
		this.onMouseMove();
	}
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setX = function(value) {
	this._x = value;
	return this._x;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getX = function() {
	return this._x;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setY = function(value) {
	this._y = value;
	return this._y;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getY = function() {
	return this._y;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setWidth = function(value) {
	this._width = value;
	return this._width;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getWidth = function() {
	return this._width;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setHeight = function(value) {
	this._height = value;
	return this._height;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getHeight = function() {
	return this._height;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.setZOrder = function(value) {
	return value;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.getZOrder = function() {
	return 0;
}
org.silex.runtime.domObject.base.DOMObjectBase.prototype.__class__ = org.silex.runtime.domObject.base.DOMObjectBase;
if(!org.silex.runtime.domObject.js) org.silex.runtime.domObject.js = {}
org.silex.runtime.domObject.js.DOMObject = function(referenceToNativeDOM) { if( referenceToNativeDOM === $_ ) return; {
	org.silex.runtime.domObject.base.DOMObjectBase.call(this,referenceToNativeDOM);
}}
org.silex.runtime.domObject.js.DOMObject.__name__ = ["org","silex","runtime","domObject","js","DOMObject"];
org.silex.runtime.domObject.js.DOMObject.__super__ = org.silex.runtime.domObject.base.DOMObjectBase;
for(var k in org.silex.runtime.domObject.base.DOMObjectBase.prototype ) org.silex.runtime.domObject.js.DOMObject.prototype[k] = org.silex.runtime.domObject.base.DOMObjectBase.prototype[k];
org.silex.runtime.domObject.js.DOMObject.prototype.init = function() {
	this._referenceToNativeDOM.style.position = "absolute";
	if(this._referenceToNativeDOM.style.width != null) {
		this._width = Std.parseInt(this._referenceToNativeDOM.style.width);
	}
	else {
		this._width = this._referenceToNativeDOM.offsetWidth;
	}
	if(this._referenceToNativeDOM.style.height != null) {
		this._height = Std.parseInt(this._referenceToNativeDOM.style.height);
	}
	else {
		this._height = this._referenceToNativeDOM.offsetHeight;
	}
	this._height = this._referenceToNativeDOM.offsetHeight;
	this._x = Std.parseInt(this._referenceToNativeDOM.style.left);
	this._y = Std.parseInt(this._referenceToNativeDOM.style.top);
}
org.silex.runtime.domObject.js.DOMObject.prototype.addChild = function(domObject) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.addChild.call(this,domObject);
	this._referenceToNativeDOM.appendChild(domObject.getReferenceToNativeDOM());
	domObject.getReferenceToNativeDOM().style.zIndex = this._children.length - 1;
}
org.silex.runtime.domObject.js.DOMObject.prototype.removeChild = function(domObject) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.removeChild.call(this,domObject);
	this._referenceToNativeDOM.removeChild(domObject.getReferenceToNativeDOM());
}
org.silex.runtime.domObject.js.DOMObject.prototype.setIsVisible = function(value) {
	if(value == true) {
		this._referenceToNativeDOM.style.visibility = "visible";
	}
	else {
		this._referenceToNativeDOM.style.visibility = "hidden";
	}
	return value;
}
org.silex.runtime.domObject.js.DOMObject.prototype.getIsVisible = function() {
	if(this._referenceToNativeDOM.style.visibility == "visible") {
		return true;
	}
	else {
		return false;
	}
}
org.silex.runtime.domObject.js.DOMObject.prototype.setAlpha = function(value) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setAlpha.call(this,value);
	this._referenceToNativeDOM.style.opacity = value;
	return value;
}
org.silex.runtime.domObject.js.DOMObject.prototype.getAlpha = function() {
	return Std.parseFloat(this._referenceToNativeDOM.style.opacity);
}
org.silex.runtime.domObject.js.DOMObject.prototype.setMatrix = function(matrix) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setMatrix.call(this,matrix);
	var nativeSprite = this._referenceToNativeDOM;
	var matrixData = matrix.getMatrixData();
	var cssMatrixProperty = "matrix(" + matrixData.a + "," + matrixData.b + "," + matrixData.c + "," + matrixData.d + "," + matrixData.e + "," + matrixData.f + ")";
	if(this._referenceToNativeDOM.style.transform != null) {
		this._referenceToNativeDOM.style.transform = cssMatrixProperty;
		this._referenceToNativeDOM.style.transformOrigin = "0 0";
	}
	if(this._referenceToNativeDOM.style.MozTransform != null) {
		this._referenceToNativeDOM.style.MozTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.MozTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.WebkitTransform != null) {
		this._referenceToNativeDOM.style.WebkitTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.WebkitTransformOrigin = "0 0";
	}
	else if(this._referenceToNativeDOM.style.OTransform != null) {
		this._referenceToNativeDOM.style.OTransform = cssMatrixProperty;
		this._referenceToNativeDOM.style.OTransform = "0 0";
	}
	return this._matrix;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setNativeListeners = function() {
	this._referenceToNativeDOM.onmousedown = $closure(this,"onNativePress");
	this._referenceToNativeDOM.onmouseup = $closure(this,"onNativeRelease");
	this._referenceToNativeDOM.onmouseover = $closure(this,"onNativeRollOver");
	this._referenceToNativeDOM.onmouseout = $closure(this,"onNativeRollOut");
	this._referenceToNativeDOM.onmousemove = $closure(this,"onNativeMouseMove");
	this._referenceToNativeDOM.ondblclick = $closure(this,"onNativeDoubleClick");
}
org.silex.runtime.domObject.js.DOMObject.prototype.unsetNativeListeners = function() {
	this._referenceToNativeDOM.onmousedown = null;
	this._referenceToNativeDOM.onmouseup = null;
	this._referenceToNativeDOM.onmouseover = null;
	this._referenceToNativeDOM.onmouseout = null;
	this._referenceToNativeDOM.onmousemove = null;
	this._referenceToNativeDOM.ondblclick = null;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setX = function(value) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setX.call(this,value);
	this._referenceToNativeDOM.style.left = value + "px";
	return this._x;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setY = function(value) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setY.call(this,value);
	this._referenceToNativeDOM.style.top = value + "px";
	return this._y;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setWidth = function(value) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setWidth.call(this,value);
	this._referenceToNativeDOM.style.width = value + "px";
	return this._width;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setHeight = function(value) {
	org.silex.runtime.domObject.base.DOMObjectBase.prototype.setHeight.call(this,value);
	this._referenceToNativeDOM.style.height = value + "px";
	return this._height;
}
org.silex.runtime.domObject.js.DOMObject.prototype.setZOrder = function(value) {
	if(value > this._parent.getChildren().length - 1) {
		value = this._parent.getChildren().length - 1;
	}
	var nativeParent = this._referenceToNativeDOM.parentNode;
	var numChildren = nativeParent.childNodes.length;
	var oldIndex = this.getZOrder();
	var newIndex = value;
	{
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var currentChildren = nativeParent.childNodes[i];
			if(currentChildren.style != null) {
				var currentChildrenZIndex = currentChildren.style.zIndex;
				if(currentChildrenZIndex > oldIndex) {
					currentChildrenZIndex--;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
	}
	{
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var currentChildren = nativeParent.childNodes[i];
			if(currentChildren.style != null) {
				var currentChildrenZIndex = currentChildren.style.zIndex;
				if(currentChildrenZIndex >= newIndex) {
					currentChildrenZIndex++;
					currentChildren.style.zIndex = currentChildrenZIndex;
				}
			}
		}
	}
	this._referenceToNativeDOM.style.zIndex = value;
	return value;
}
org.silex.runtime.domObject.js.DOMObject.prototype.getZOrder = function() {
	return this._referenceToNativeDOM.style.zIndex;
}
org.silex.runtime.domObject.js.DOMObject.prototype.__class__ = org.silex.runtime.domObject.js.DOMObject;
org.silex.runtime.domObject.base.TextDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.base.TextDOMObjectBase.__name__ = ["org","silex","runtime","domObject","base","TextDOMObjectBase"];
org.silex.runtime.domObject.base.TextDOMObjectBase.__super__ = org.silex.runtime.domObject.js.DOMObject;
for(var k in org.silex.runtime.domObject.js.DOMObject.prototype ) org.silex.runtime.domObject.base.TextDOMObjectBase.prototype[k] = org.silex.runtime.domObject.js.DOMObject.prototype[k];
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype._text = null;
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.text = null;
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.addChild = function(domObject) {
	null;
}
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.removeChild = function(domObject) {
	null;
}
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.setText = function(text) {
	this._text = text;
	return this._text;
}
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.getText = function() {
	return this._text;
}
org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.__class__ = org.silex.runtime.domObject.base.TextDOMObjectBase;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
org.silex.runtime.domObject.base.ImageDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.base.ImageDOMObjectBase.__name__ = ["org","silex","runtime","domObject","base","ImageDOMObjectBase"];
org.silex.runtime.domObject.base.ImageDOMObjectBase.__super__ = org.silex.runtime.domObject.js.DOMObject;
for(var k in org.silex.runtime.domObject.js.DOMObject.prototype ) org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype[k] = org.silex.runtime.domObject.js.DOMObject.prototype[k];
org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype.addChild = function(domObject) {
	null;
}
org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype.removeChild = function(domObject) {
	null;
}
org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype.__class__ = org.silex.runtime.domObject.base.ImageDOMObjectBase;
org.silex.runtime.domObject.js.ImageDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.base.ImageDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.js.ImageDOMObject.__name__ = ["org","silex","runtime","domObject","js","ImageDOMObject"];
org.silex.runtime.domObject.js.ImageDOMObject.__super__ = org.silex.runtime.domObject.base.ImageDOMObjectBase;
for(var k in org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype ) org.silex.runtime.domObject.js.ImageDOMObject.prototype[k] = org.silex.runtime.domObject.base.ImageDOMObjectBase.prototype[k];
org.silex.runtime.domObject.js.ImageDOMObject.prototype.__class__ = org.silex.runtime.domObject.js.ImageDOMObject;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
org.silex.runtime.resource.js.StringLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.StringLoader.__name__ = ["org","silex","runtime","resource","js","StringLoader"];
org.silex.runtime.resource.js.StringLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.StringLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.StringLoader.prototype.__class__ = org.silex.runtime.resource.js.StringLoader;
if(typeof hxjson2=='undefined') hxjson2 = {}
hxjson2.JSONTokenizer = function(s,strict) { if( s === $_ ) return; {
	this.jsonString = s;
	this.strict = strict;
	this.loc = 0;
	this.nextChar();
}}
hxjson2.JSONTokenizer.__name__ = ["hxjson2","JSONTokenizer"];
hxjson2.JSONTokenizer.prototype.obj = null;
hxjson2.JSONTokenizer.prototype.jsonString = null;
hxjson2.JSONTokenizer.prototype.loc = null;
hxjson2.JSONTokenizer.prototype.ch = null;
hxjson2.JSONTokenizer.prototype.strict = null;
hxjson2.JSONTokenizer.prototype.getNextToken = function() {
	var token = new hxjson2.JSONToken();
	this.skipIgnored();
	switch(this.ch) {
	case "{":{
		token.type = hxjson2.JSONTokenType.tLEFT_BRACE;
		token.value = "{";
		this.nextChar();
	}break;
	case "}":{
		token.type = hxjson2.JSONTokenType.tRIGHT_BRACE;
		token.value = "}";
		this.nextChar();
	}break;
	case "[":{
		token.type = hxjson2.JSONTokenType.tLEFT_BRACKET;
		token.value = "[";
		this.nextChar();
	}break;
	case "]":{
		token.type = hxjson2.JSONTokenType.tRIGHT_BRACKET;
		token.value = "]";
		this.nextChar();
	}break;
	case ",":{
		token.type = hxjson2.JSONTokenType.tCOMMA;
		token.value = ",";
		this.nextChar();
	}break;
	case ":":{
		token.type = hxjson2.JSONTokenType.tCOLON;
		token.value = ":";
		this.nextChar();
	}break;
	case "t":{
		var possibleTrue = "t" + (this.nextChar() + this.nextChar() + this.nextChar());
		if(possibleTrue == "true") {
			token.type = hxjson2.JSONTokenType.tTRUE;
			token.value = true;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'true' but found " + possibleTrue);
		}
	}break;
	case "f":{
		var possibleFalse = "f" + this.nextChar() + this.nextChar() + this.nextChar() + this.nextChar();
		if(possibleFalse == "false") {
			token.type = hxjson2.JSONTokenType.tFALSE;
			token.value = false;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'false' but found " + possibleFalse);
		}
	}break;
	case "n":{
		var possibleNull = "n" + this.nextChar() + this.nextChar() + this.nextChar();
		if(possibleNull == "null") {
			token.type = hxjson2.JSONTokenType.tNULL;
			token.value = null;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'null' but found " + possibleNull);
		}
	}break;
	case "N":{
		var possibleNAN = "N" + this.nextChar() + this.nextChar();
		if(possibleNAN == "NAN" || possibleNAN == "NaN") {
			token.type = hxjson2.JSONTokenType.tNAN;
			token.value = Math.NaN;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'nan' but found " + possibleNAN);
		}
	}break;
	case "\"":{
		token = this.readString();
	}break;
	default:{
		if(this.isDigit(this.ch) || this.ch == "-") {
			token = this.readNumber();
		}
		else if(this.ch == "") {
			return null;
		}
		else {
			this.parseError("Unexpected " + this.ch + " encountered");
		}
	}break;
	}
	return token;
}
hxjson2.JSONTokenizer.prototype.readString = function() {
	var string = "";
	this.nextChar();
	while(this.ch != "\"" && this.ch != "") {
		if(this.ch == "\\") {
			this.nextChar();
			switch(this.ch) {
			case "\"":{
				string += "\"";
			}break;
			case "/":{
				string += "/";
			}break;
			case "\\":{
				string += "\\";
			}break;
			case "n":{
				string += "\n";
			}break;
			case "r":{
				string += "\r";
			}break;
			case "t":{
				string += "\t";
			}break;
			case "u":{
				var hexValue = "";
				{
					var _g = 0;
					while(_g < 4) {
						var i = _g++;
						if(!this.isHexDigit(this.nextChar())) {
							this.parseError(" Excepted a hex digit, but found: " + this.ch);
						}
						hexValue += this.ch;
					}
				}
				string += String.fromCharCode(this.hexValToInt(hexValue));
			}break;
			default:{
				string += "\\" + this.ch;
			}break;
			}
		}
		else {
			string += this.ch;
		}
		this.nextChar();
	}
	if(this.ch == "") {
		this.parseError("Unterminated string literal");
	}
	this.nextChar();
	var token = new hxjson2.JSONToken();
	token.type = hxjson2.JSONTokenType.tSTRING;
	token.value = string;
	return token;
}
hxjson2.JSONTokenizer.prototype.hexValToInt = function(hexVal) {
	var ret = 0;
	{
		var _g1 = 0, _g = hexVal.length;
		while(_g1 < _g) {
			var i = _g1++;
			ret = ret << 4;
			switch(hexVal.charAt(i).toUpperCase()) {
			case "1":{
				ret += 1;
			}break;
			case "2":{
				ret += 2;
			}break;
			case "3":{
				ret += 3;
			}break;
			case "4":{
				ret += 4;
			}break;
			case "5":{
				ret += 5;
			}break;
			case "6":{
				ret += 6;
			}break;
			case "7":{
				ret += 7;
			}break;
			case "8":{
				ret += 8;
			}break;
			case "9":{
				ret += 9;
			}break;
			case "A":{
				ret += 10;
			}break;
			case "B":{
				ret += 11;
			}break;
			case "C":{
				ret += 12;
			}break;
			case "D":{
				ret += 13;
			}break;
			case "E":{
				ret += 14;
			}break;
			case "F":{
				ret += 15;
			}break;
			}
		}
	}
	return ret;
}
hxjson2.JSONTokenizer.prototype.readNumber = function() {
	var input = "";
	if(this.ch == "-") {
		input += "-";
		this.nextChar();
	}
	if(!this.isDigit(this.ch)) {
		this.parseError("Expecting a digit");
	}
	if(this.ch == "0") {
		input += this.ch;
		this.nextChar();
		if(this.isDigit(this.ch)) {
			this.parseError("A digit cannot immediately follow 0");
		}
		else {
			if(!this.strict && this.ch == "x") {
				input += this.ch;
				this.nextChar();
				if(this.isHexDigit(this.ch)) {
					input += this.ch;
					this.nextChar();
				}
				else {
					this.parseError("Number in hex format require at least one hex digit after \"0x\"");
				}
				while(this.isHexDigit(this.ch)) {
					input += this.ch;
					this.nextChar();
				}
				input = Std.string(this.hexValToInt(input));
			}
		}
	}
	else {
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	if(this.ch == ".") {
		input += ".";
		this.nextChar();
		if(!this.isDigit(this.ch)) {
			this.parseError("Expecting a digit");
		}
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	if(this.ch == "e" || this.ch == "E") {
		input += "e";
		this.nextChar();
		if(this.ch == "+" || this.ch == "-") {
			input += this.ch;
			this.nextChar();
		}
		if(!this.isDigit(this.ch)) {
			this.parseError("Scientific notation number needs exponent value");
		}
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	var num = Std.parseFloat(input);
	if(Math.isFinite(num) && !Math.isNaN(num)) {
		var token = new hxjson2.JSONToken();
		token.type = hxjson2.JSONTokenType.tNUMBER;
		token.value = num;
		return token;
	}
	else {
		this.parseError("Number " + num + " is not valid!");
	}
	return null;
}
hxjson2.JSONTokenizer.prototype.nextChar = function() {
	return this.ch = this.jsonString.charAt(this.loc++);
}
hxjson2.JSONTokenizer.prototype.skipIgnored = function() {
	var originalLoc;
	do {
		originalLoc = this.loc;
		this.skipWhite();
		this.skipComments();
	} while(originalLoc != this.loc);
}
hxjson2.JSONTokenizer.prototype.skipComments = function() {
	if(this.ch == "/") {
		this.nextChar();
		switch(this.ch) {
		case "/":{
			do {
				this.nextChar();
			} while(this.ch != "\n" && this.ch != "");
			this.nextChar();
		}break;
		case "*":{
			this.nextChar();
			while(true) {
				if(this.ch == "*") {
					this.nextChar();
					if(this.ch == "/") {
						this.nextChar();
						break;
					}
				}
				else {
					this.nextChar();
				}
				if(this.ch == "") {
					this.parseError("Multi-line comment not closed");
				}
			}
		}break;
		default:{
			this.parseError("Unexpected " + this.ch + " encountered (expecting '/' or '*' )");
		}break;
		}
	}
}
hxjson2.JSONTokenizer.prototype.skipWhite = function() {
	while(this.isWhiteSpace(this.ch)) {
		this.nextChar();
	}
}
hxjson2.JSONTokenizer.prototype.isWhiteSpace = function(ch) {
	return ch == " " || ch == "\t" || ch == "\n" || ch == "\r";
}
hxjson2.JSONTokenizer.prototype.isDigit = function(ch) {
	return ch >= "0" && ch <= "9";
}
hxjson2.JSONTokenizer.prototype.isHexDigit = function(ch) {
	var uc = ch.toUpperCase();
	return this.isDigit(ch) || uc >= "A" && uc <= "F";
}
hxjson2.JSONTokenizer.prototype.parseError = function(message) {
	throw new hxjson2.JSONParseError(message,this.loc,this.jsonString);
}
hxjson2.JSONTokenizer.prototype.__class__ = hxjson2.JSONTokenizer;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
org.silex.runtime.resource.LoadingTypeValue = { __ename__ : ["org","silex","runtime","resource","LoadingTypeValue"], __constructs__ : ["data","image","text","animation","container","library"] }
org.silex.runtime.resource.LoadingTypeValue.data = ["data",0];
org.silex.runtime.resource.LoadingTypeValue.data.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.data.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.resource.LoadingTypeValue.image = ["image",1];
org.silex.runtime.resource.LoadingTypeValue.image.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.image.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.resource.LoadingTypeValue.text = ["text",2];
org.silex.runtime.resource.LoadingTypeValue.text.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.text.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.resource.LoadingTypeValue.animation = ["animation",3];
org.silex.runtime.resource.LoadingTypeValue.animation.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.animation.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.resource.LoadingTypeValue.container = ["container",4];
org.silex.runtime.resource.LoadingTypeValue.container.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.container.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.resource.LoadingTypeValue.library = ["library",5];
org.silex.runtime.resource.LoadingTypeValue.library.toString = $estr;
org.silex.runtime.resource.LoadingTypeValue.library.__enum__ = org.silex.runtime.resource.LoadingTypeValue;
org.silex.runtime.domObject.base.ContainerDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.base.ContainerDOMObjectBase.__name__ = ["org","silex","runtime","domObject","base","ContainerDOMObjectBase"];
org.silex.runtime.domObject.base.ContainerDOMObjectBase.__super__ = org.silex.runtime.domObject.js.DOMObject;
for(var k in org.silex.runtime.domObject.js.DOMObject.prototype ) org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype[k] = org.silex.runtime.domObject.js.DOMObject.prototype[k];
org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype._semantic = null;
org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype.setSemantic = function(semantic) {
	this._semantic = semantic;
}
org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype.getSemantic = function() {
	return this._semantic;
}
org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype.__class__ = org.silex.runtime.domObject.base.ContainerDOMObjectBase;
Visitors = function(p) { if( p === $_ ) return; {
	this.firstTime = true;
	this._numberOfUsers = 0;
	var nativeDOMObject;
	nativeDOMObject = js.Lib.document.getElementById("VisitorsDIV");
	Visitors._applicationName = $jsvars.applicationName;
	Visitors._instanceName = $jsvars.instanceName;
	Visitors.ROOT_URL = window.location.href.toString();
	var relativePath = $jsvars.relativePath;
	if(relativePath != null) Visitors.ROOT_URL += relativePath;
	this._containerDOMObject = new org.silex.runtime.domObject.js.ContainerDOMObject(nativeDOMObject);
	this._guiBuild();
	this._poll();
}}
Visitors.__name__ = ["Visitors"];
Visitors._visitors = null;
Visitors.main = function() {
	Visitors._visitors = new Visitors();
}
Visitors._instanceName = null;
Visitors._applicationName = null;
Visitors.ROOT_URL = null;
Visitors.prototype._containerDOMObject = null;
Visitors.prototype._textDOMObject = null;
Visitors.prototype._imageDOMObject = null;
Visitors.prototype._numberOfUsers = null;
Visitors.prototype._guiBuild = function() {
	org.silex.runtime.resource.ResourceLoaderManager.loadImage(Visitors.ROOT_URL + "assets/bg.png",$closure(this,"_bgImageLoadedCallback"),$closure(this,"_loadingErrorCallback"));
	this._textDOMObject = new org.silex.runtime.domObject.js.TextDOMObject();
}
Visitors.prototype.onTimer = function() {
	{
		var _g = this._textDOMObject;
		_g.setX(_g.getX() + 10);
	}
	{
		var _g = this._textDOMObject;
		_g.setY(_g.getY() + 10);
	}
}
Visitors.prototype._loadingErrorCallback = function(message) {
	null;
}
Visitors.prototype._bgImageLoadedCallback = function(imageDOMObject) {
	null;
	this._containerDOMObject.addChild(imageDOMObject);
	this._containerDOMObject.addChild(this._textDOMObject);
	this._imageDOMObject = imageDOMObject;
	this.redraw();
}
Visitors.prototype.firstTime = null;
Visitors.prototype._poll = function() {
	var params = "sld_action=poll&applicationName=" + Visitors._applicationName + "&instanceName=" + Visitors._instanceName + "&metaData={\"displayName\":\"TESTMETADATA\"}";
	org.silex.runtime.resource.ResourceLoaderManager.loadString("?action=wp_ajax_add_poll&" + params,$closure(this,"_pollingSuccessCallback"),$closure(this,"_pollingErrorCallback"));
}
Visitors.prototype._pollingErrorCallback = function(message) {
	null;
}
Visitors.prototype._pollingSuccessCallback = function(message) {
	null;
	if(this.firstTime == true) {
		this.firstTime = false;
		this.connectionSuccess();
	}
	if(message != "" && message != "Done.<br />") {
		this.onStatus(new hxjson2.JSONDecoder(message,false).getValue());
	}
	haxe.Timer.delay($closure(this,"_poll"),10);
}
Visitors.prototype.connectionSuccess = function() {
	null;
	var params = "action=getClients&";
	org.silex.runtime.resource.ResourceLoaderManager.loadString(Visitors.ROOT_URL + "?action=wp_ajax_add_poll&" + params,$closure(this,"_getClientsMetaData"),$closure(this,"_pollingErrorCallback"));
}
Visitors.prototype.onStatus = function(message) {
	null;
	if(message.type == "TYPE_NEW_CLIENT") this._numberOfUsers++;
	else if(message.type == "TYPE_CLIENT_DELETED") this._numberOfUsers--;
	this.redraw();
}
Visitors.prototype._getClientsMetaData = function(message) {
	var clients = new hxjson2.JSONDecoder(message,false).getValue();
	this._numberOfUsers = clients.length;
	this.redraw();
}
Visitors.prototype.redraw = function() {
	this._textDOMObject.setText(this._numberOfUsers + " users on this page");
	this._textDOMObject.setX(this._imageDOMObject.getX());
	this._textDOMObject.setY(this._imageDOMObject.getY());
	this._textDOMObject.setWidth(this._imageDOMObject.getWidth());
	this._textDOMObject.setHeight(this._imageDOMObject.getHeight());
}
Visitors.prototype.__class__ = Visitors;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
org.silex.runtime.resource.js.ContainerLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.ContainerLoader.__name__ = ["org","silex","runtime","resource","js","ContainerLoader"];
org.silex.runtime.resource.js.ContainerLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.ContainerLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.ContainerLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domObject.js.ContainerDOMObject(js.Lib.document.createElement("div"));
	domObject.getReferenceToNativeDOM().innerHTML = data;
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.resource.js.ContainerLoader.prototype.__class__ = org.silex.runtime.resource.js.ContainerLoader;
hxjson2.JSONParseError = function(message,location,text) { if( message === $_ ) return; {
	if(text == null) text = "";
	if(location == null) location = 0;
	if(message == null) message = "";
	this.name = "JSONParseError";
	this._location = location;
	this._text = text;
	this.message = message;
}}
hxjson2.JSONParseError.__name__ = ["hxjson2","JSONParseError"];
hxjson2.JSONParseError.prototype._location = null;
hxjson2.JSONParseError.prototype._text = null;
hxjson2.JSONParseError.prototype.name = null;
hxjson2.JSONParseError.prototype.text = null;
hxjson2.JSONParseError.prototype.location = null;
hxjson2.JSONParseError.prototype.message = null;
hxjson2.JSONParseError.prototype.getlocation = function() {
	return this._location;
}
hxjson2.JSONParseError.prototype.gettext = function() {
	return this._text;
}
hxjson2.JSONParseError.prototype.toString = function() {
	return this.name + ": " + this.message + " at position: " + this._location + " near \"" + this._text + "\"";
}
hxjson2.JSONParseError.prototype.__class__ = hxjson2.JSONParseError;
hxjson2.JSONToken = function(type,value) { if( type === $_ ) return; {
	this.type = type == null?hxjson2.JSONTokenType.tUNKNOWN:type;
	this.value = value;
}}
hxjson2.JSONToken.__name__ = ["hxjson2","JSONToken"];
hxjson2.JSONToken.prototype.type = null;
hxjson2.JSONToken.prototype.value = null;
hxjson2.JSONToken.prototype.__class__ = hxjson2.JSONToken;
if(!org.silex.runtime.geom) org.silex.runtime.geom = {}
org.silex.runtime.geom.TransformationOriginValue = { __ename__ : ["org","silex","runtime","geom","TransformationOriginValue"], __constructs__ : ["constant","point"] }
org.silex.runtime.geom.TransformationOriginValue.constant = function(transformationOriginX,transformationOriginY) { var $x = ["constant",0,transformationOriginX,transformationOriginY]; $x.__enum__ = org.silex.runtime.geom.TransformationOriginValue; $x.toString = $estr; return $x; }
org.silex.runtime.geom.TransformationOriginValue.point = function(point) { var $x = ["point",1,point]; $x.__enum__ = org.silex.runtime.geom.TransformationOriginValue; $x.toString = $estr; return $x; }
org.silex.runtime.geom.TransformationOriginXValue = { __ename__ : ["org","silex","runtime","geom","TransformationOriginXValue"], __constructs__ : ["left","center","right"] }
org.silex.runtime.geom.TransformationOriginXValue.left = ["left",0];
org.silex.runtime.geom.TransformationOriginXValue.left.toString = $estr;
org.silex.runtime.geom.TransformationOriginXValue.left.__enum__ = org.silex.runtime.geom.TransformationOriginXValue;
org.silex.runtime.geom.TransformationOriginXValue.center = ["center",1];
org.silex.runtime.geom.TransformationOriginXValue.center.toString = $estr;
org.silex.runtime.geom.TransformationOriginXValue.center.__enum__ = org.silex.runtime.geom.TransformationOriginXValue;
org.silex.runtime.geom.TransformationOriginXValue.right = ["right",2];
org.silex.runtime.geom.TransformationOriginXValue.right.toString = $estr;
org.silex.runtime.geom.TransformationOriginXValue.right.__enum__ = org.silex.runtime.geom.TransformationOriginXValue;
org.silex.runtime.geom.TransformationOriginYValue = { __ename__ : ["org","silex","runtime","geom","TransformationOriginYValue"], __constructs__ : ["top","middle","bottom"] }
org.silex.runtime.geom.TransformationOriginYValue.top = ["top",0];
org.silex.runtime.geom.TransformationOriginYValue.top.toString = $estr;
org.silex.runtime.geom.TransformationOriginYValue.top.__enum__ = org.silex.runtime.geom.TransformationOriginYValue;
org.silex.runtime.geom.TransformationOriginYValue.middle = ["middle",1];
org.silex.runtime.geom.TransformationOriginYValue.middle.toString = $estr;
org.silex.runtime.geom.TransformationOriginYValue.middle.__enum__ = org.silex.runtime.geom.TransformationOriginYValue;
org.silex.runtime.geom.TransformationOriginYValue.bottom = ["bottom",2];
org.silex.runtime.geom.TransformationOriginYValue.bottom.toString = $estr;
org.silex.runtime.geom.TransformationOriginYValue.bottom.__enum__ = org.silex.runtime.geom.TransformationOriginYValue;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.__class__ = haxe.Timer;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
org.silex.runtime.resource.js.ImageLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.ImageLoader.__name__ = ["org","silex","runtime","resource","js","ImageLoader"];
org.silex.runtime.resource.js.ImageLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.ImageLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.ImageLoader.prototype.doLoad = function(url) {
	var domObject = new org.silex.runtime.domObject.js.ImageDOMObject(js.Lib.document.createElement("img"));
	var onLoadCompleteDelegate = $closure(this,"onLoadComplete");
	var onLoadErrorDelegate = $closure(this,"onLoadError");
	domObject.getReferenceToNativeDOM().onload = function() {
		onLoadCompleteDelegate(domObject);
	}
	domObject.getReferenceToNativeDOM().onerror = function() {
		onLoadErrorDelegate("couldn't load picture");
	}
	domObject.getReferenceToNativeDOM().setAttribute("src",url);
}
org.silex.runtime.resource.js.ImageLoader.prototype.__class__ = org.silex.runtime.resource.js.ImageLoader;
org.silex.runtime.domObject.js.TextDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	if(referenceToNativeDOMObject == null) {
		referenceToNativeDOMObject = js.Lib.document.createElement("div");
	}
	org.silex.runtime.domObject.base.TextDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.js.TextDOMObject.__name__ = ["org","silex","runtime","domObject","js","TextDOMObject"];
org.silex.runtime.domObject.js.TextDOMObject.__super__ = org.silex.runtime.domObject.base.TextDOMObjectBase;
for(var k in org.silex.runtime.domObject.base.TextDOMObjectBase.prototype ) org.silex.runtime.domObject.js.TextDOMObject.prototype[k] = org.silex.runtime.domObject.base.TextDOMObjectBase.prototype[k];
org.silex.runtime.domObject.js.TextDOMObject.prototype.setText = function(text) {
	org.silex.runtime.domObject.base.TextDOMObjectBase.prototype.setText.call(this,text);
	this._referenceToNativeDOM.innerHTML = text;
	return text;
}
org.silex.runtime.domObject.js.TextDOMObject.prototype.__class__ = org.silex.runtime.domObject.js.TextDOMObject;
org.silex.runtime.resource.ResourceLoaderManager = function(p) { if( p === $_ ) return; {
	null;
}}
org.silex.runtime.resource.ResourceLoaderManager.__name__ = ["org","silex","runtime","resource","ResourceLoaderManager"];
org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray = null;
org.silex.runtime.resource.ResourceLoaderManager.loadImage = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.image};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.loadText = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.text};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.loadAnimation = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.animation};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.loadContainer = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.container};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.loadString = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.data};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.loadLibrary = function(url,successCallback,errorCallback,allowCache) {
	if(allowCache == null) allowCache = true;
	var resourceDataToAdd = { url : url, onLoadComplete : successCallback, onLoadError : errorCallback, allowCache : allowCache, loadingType : org.silex.runtime.resource.LoadingTypeValue.library};
	org.silex.runtime.resource.ResourceLoaderManager.addResourceData(resourceDataToAdd);
}
org.silex.runtime.resource.ResourceLoaderManager.addResourceData = function(resourceData) {
	if(org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray == null) {
		org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray = new Array();
	}
	org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray.push(resourceData);
	if(org.silex.runtime.resource.ResourceLoaderManager._isLoading == false) {
		org.silex.runtime.resource.ResourceLoaderManager.loadNextResource();
	}
}
org.silex.runtime.resource.ResourceLoaderManager.loadNextResource = function() {
	if(org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray.length == 0) {
		org.silex.runtime.resource.ResourceLoaderManager._isLoading = false;
	}
	else {
		org.silex.runtime.resource.ResourceLoaderManager._isLoading = true;
		var resourceDataToLoad = org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray[0];
		var resourceLoader;
		var $e = resourceDataToLoad.loadingType;
		switch( $e[1] ) {
		case 0:
		{
			resourceLoader = new org.silex.runtime.resource.js.StringLoader();
		}break;
		case 1:
		{
			resourceLoader = new org.silex.runtime.resource.js.ImageLoader();
		}break;
		case 2:
		{
			resourceLoader = new org.silex.runtime.resource.js.TextLoader();
		}break;
		case 3:
		{
			resourceLoader = new org.silex.runtime.resource.js.AnimationLoader();
		}break;
		case 4:
		{
			resourceLoader = new org.silex.runtime.resource.js.ContainerLoader();
		}break;
		case 5:
		{
			resourceLoader = new org.silex.runtime.resource.js.LibraryLoader();
		}break;
		}
		resourceLoader.load(resourceDataToLoad.url,$closure(org.silex.runtime.resource.ResourceLoaderManager,"onLoadComplete"),$closure(org.silex.runtime.resource.ResourceLoaderManager,"onLoadError"),resourceDataToLoad.allowCache);
	}
}
org.silex.runtime.resource.ResourceLoaderManager.onLoadComplete = function(data) {
	var loadedResourceData = org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray.shift();
	loadedResourceData.onLoadComplete(data);
	org.silex.runtime.resource.ResourceLoaderManager.loadNextResource();
}
org.silex.runtime.resource.ResourceLoaderManager.onLoadError = function(data) {
	var errorResourceData = org.silex.runtime.resource.ResourceLoaderManager._resourceDataArray.shift();
	errorResourceData.onLoadError(data);
	org.silex.runtime.resource.ResourceLoaderManager.loadNextResource();
}
org.silex.runtime.resource.ResourceLoaderManager.prototype.__class__ = org.silex.runtime.resource.ResourceLoaderManager;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
org.silex.runtime.resource.js.TextLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.TextLoader.__name__ = ["org","silex","runtime","resource","js","TextLoader"];
org.silex.runtime.resource.js.TextLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.TextLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.TextLoader.prototype.onLoadComplete = function(data) {
	var domObject = new org.silex.runtime.domObject.js.TextDOMObject(js.Lib.document.createElement("div"));
	domObject.setText(data);
	this._onLoadCompleteCallback(domObject);
}
org.silex.runtime.resource.js.TextLoader.prototype.__class__ = org.silex.runtime.resource.js.TextLoader;
haxe.Http = function(url) { if( url === $_ ) return; {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	}
	h.onError = function(e) {
		throw e;
	}
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e0 ) {
				{
					var e = $e0;
					$r = null;
				}
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null: case undefined:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
	}
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true;
	else { var $it1 = this.params.keys();
	while( $it1.hasNext() ) { var p = $it1.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(post) r.open("POST",this.url,this.async);
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		}
		else r.open("GET",this.url,this.async);
	}
	catch( $e2 ) {
		{
			var e = $e2;
			{
				this.onError(e.toString());
				return;
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it3 = this.headers.keys();
	while( $it3.hasNext() ) { var h = $it3.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
	null;
}
haxe.Http.prototype.onError = function(msg) {
	null;
}
haxe.Http.prototype.onStatus = function(status) {
	null;
}
haxe.Http.prototype.__class__ = haxe.Http;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
org.silex.runtime.resource.js.LibraryLoader = function(p) { if( p === $_ ) return; {
	org.silex.runtime.resource.ResourceLoader.call(this);
}}
org.silex.runtime.resource.js.LibraryLoader.__name__ = ["org","silex","runtime","resource","js","LibraryLoader"];
org.silex.runtime.resource.js.LibraryLoader.__super__ = org.silex.runtime.resource.ResourceLoader;
for(var k in org.silex.runtime.resource.ResourceLoader.prototype ) org.silex.runtime.resource.js.LibraryLoader.prototype[k] = org.silex.runtime.resource.ResourceLoader.prototype[k];
org.silex.runtime.resource.js.LibraryLoader.prototype.doLoad = function(url) {
	var scrptE = js.Lib.document.createElement("script");
	scrptE.setAttribute("type","text/javascript");
	scrptE.setAttribute("language","JavaScript");
	scrptE.setAttribute("src",url);
	scrptE.onload = $closure(this,"onLoadComplete");
	scrptE.onerror = $closure(this,"onLoadError");
	js.Lib.document.getElementsByTagName("head")[0].appendChild(scrptE);
}
org.silex.runtime.resource.js.LibraryLoader.prototype.onLoadComplete = function(data) {
	this._onLoadCompleteCallback(null);
}
org.silex.runtime.resource.js.LibraryLoader.prototype.__class__ = org.silex.runtime.resource.js.LibraryLoader;
org.silex.runtime.domObject.base.AnimationDOMObjectBase = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.js.DOMObject.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.base.AnimationDOMObjectBase.__name__ = ["org","silex","runtime","domObject","base","AnimationDOMObjectBase"];
org.silex.runtime.domObject.base.AnimationDOMObjectBase.__super__ = org.silex.runtime.domObject.js.DOMObject;
for(var k in org.silex.runtime.domObject.js.DOMObject.prototype ) org.silex.runtime.domObject.base.AnimationDOMObjectBase.prototype[k] = org.silex.runtime.domObject.js.DOMObject.prototype[k];
org.silex.runtime.domObject.base.AnimationDOMObjectBase.prototype.__class__ = org.silex.runtime.domObject.base.AnimationDOMObjectBase;
org.silex.runtime.domObject.js.AnimationDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.base.AnimationDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.js.AnimationDOMObject.__name__ = ["org","silex","runtime","domObject","js","AnimationDOMObject"];
org.silex.runtime.domObject.js.AnimationDOMObject.__super__ = org.silex.runtime.domObject.base.AnimationDOMObjectBase;
for(var k in org.silex.runtime.domObject.base.AnimationDOMObjectBase.prototype ) org.silex.runtime.domObject.js.AnimationDOMObject.prototype[k] = org.silex.runtime.domObject.base.AnimationDOMObjectBase.prototype[k];
org.silex.runtime.domObject.js.AnimationDOMObject.prototype.__class__ = org.silex.runtime.domObject.js.AnimationDOMObject;
org.silex.runtime.domObject.FillStyleValue = { __ename__ : ["org","silex","runtime","domObject","FillStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
org.silex.runtime.domObject.FillStyleValue.none = ["none",0];
org.silex.runtime.domObject.FillStyleValue.none.toString = $estr;
org.silex.runtime.domObject.FillStyleValue.none.__enum__ = org.silex.runtime.domObject.FillStyleValue;
org.silex.runtime.domObject.FillStyleValue.monochrome = function(colorStop) { var $x = ["monochrome",1,colorStop]; $x.__enum__ = org.silex.runtime.domObject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.FillStyleValue.gradient = function(gradientStyle) { var $x = ["gradient",2,gradientStyle]; $x.__enum__ = org.silex.runtime.domObject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.FillStyleValue.bitmap = function(imageDOMObject,repeat) { var $x = ["bitmap",3,imageDOMObject,repeat]; $x.__enum__ = org.silex.runtime.domObject.FillStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.LineStyleValue = { __ename__ : ["org","silex","runtime","domObject","LineStyleValue"], __constructs__ : ["none","monochrome","gradient","bitmap"] }
org.silex.runtime.domObject.LineStyleValue.none = ["none",0];
org.silex.runtime.domObject.LineStyleValue.none.toString = $estr;
org.silex.runtime.domObject.LineStyleValue.none.__enum__ = org.silex.runtime.domObject.LineStyleValue;
org.silex.runtime.domObject.LineStyleValue.monochrome = function(colorStop,lineStyle) { var $x = ["monochrome",1,colorStop,lineStyle]; $x.__enum__ = org.silex.runtime.domObject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.LineStyleValue.gradient = function(gradientStyle,lineStyle) { var $x = ["gradient",2,gradientStyle,lineStyle]; $x.__enum__ = org.silex.runtime.domObject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.LineStyleValue.bitmap = function(imageDOMObject,lineStyle,repeat) { var $x = ["bitmap",3,imageDOMObject,lineStyle,repeat]; $x.__enum__ = org.silex.runtime.domObject.LineStyleValue; $x.toString = $estr; return $x; }
org.silex.runtime.domObject.GradientTypeValue = { __ename__ : ["org","silex","runtime","domObject","GradientTypeValue"], __constructs__ : ["linear","radial"] }
org.silex.runtime.domObject.GradientTypeValue.linear = ["linear",0];
org.silex.runtime.domObject.GradientTypeValue.linear.toString = $estr;
org.silex.runtime.domObject.GradientTypeValue.linear.__enum__ = org.silex.runtime.domObject.GradientTypeValue;
org.silex.runtime.domObject.GradientTypeValue.radial = ["radial",1];
org.silex.runtime.domObject.GradientTypeValue.radial.toString = $estr;
org.silex.runtime.domObject.GradientTypeValue.radial.__enum__ = org.silex.runtime.domObject.GradientTypeValue;
org.silex.runtime.domObject.CapsStyleValue = { __ename__ : ["org","silex","runtime","domObject","CapsStyleValue"], __constructs__ : ["none","square","round"] }
org.silex.runtime.domObject.CapsStyleValue.none = ["none",0];
org.silex.runtime.domObject.CapsStyleValue.none.toString = $estr;
org.silex.runtime.domObject.CapsStyleValue.none.__enum__ = org.silex.runtime.domObject.CapsStyleValue;
org.silex.runtime.domObject.CapsStyleValue.square = ["square",1];
org.silex.runtime.domObject.CapsStyleValue.square.toString = $estr;
org.silex.runtime.domObject.CapsStyleValue.square.__enum__ = org.silex.runtime.domObject.CapsStyleValue;
org.silex.runtime.domObject.CapsStyleValue.round = ["round",2];
org.silex.runtime.domObject.CapsStyleValue.round.toString = $estr;
org.silex.runtime.domObject.CapsStyleValue.round.__enum__ = org.silex.runtime.domObject.CapsStyleValue;
org.silex.runtime.domObject.JointStyleValue = { __ename__ : ["org","silex","runtime","domObject","JointStyleValue"], __constructs__ : ["miter","round","bevel"] }
org.silex.runtime.domObject.JointStyleValue.miter = ["miter",0];
org.silex.runtime.domObject.JointStyleValue.miter.toString = $estr;
org.silex.runtime.domObject.JointStyleValue.miter.__enum__ = org.silex.runtime.domObject.JointStyleValue;
org.silex.runtime.domObject.JointStyleValue.round = ["round",1];
org.silex.runtime.domObject.JointStyleValue.round.toString = $estr;
org.silex.runtime.domObject.JointStyleValue.round.__enum__ = org.silex.runtime.domObject.JointStyleValue;
org.silex.runtime.domObject.JointStyleValue.bevel = ["bevel",2];
org.silex.runtime.domObject.JointStyleValue.bevel.toString = $estr;
org.silex.runtime.domObject.JointStyleValue.bevel.__enum__ = org.silex.runtime.domObject.JointStyleValue;
org.silex.runtime.geom.Matrix = function(matrixData) { if( matrixData === $_ ) return; {
	this.setMatrixData(matrixData);
}}
org.silex.runtime.geom.Matrix.__name__ = ["org","silex","runtime","geom","Matrix"];
org.silex.runtime.geom.Matrix.prototype._matrixData = null;
org.silex.runtime.geom.Matrix.prototype.identity = function() {
	this._matrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : 0.0, f : 0.0};
}
org.silex.runtime.geom.Matrix.prototype.setMatrixData = function(matrixData) {
	this._matrixData = matrixData;
	if(this._matrixData == null) {
		this.identity();
	}
}
org.silex.runtime.geom.Matrix.prototype.getMatrixData = function() {
	return this._matrixData;
}
org.silex.runtime.geom.Matrix.prototype.concatenate = function(matrix) {
	var currentMatrixData = this._matrixData;
	var targetMatrixData = matrix.getMatrixData();
	var a = currentMatrixData.a * targetMatrixData.a + currentMatrixData.c * targetMatrixData.b;
	var b = currentMatrixData.b * targetMatrixData.a + currentMatrixData.d * targetMatrixData.b;
	var c = currentMatrixData.a * targetMatrixData.c + currentMatrixData.c * targetMatrixData.d;
	var d = currentMatrixData.b * targetMatrixData.c + currentMatrixData.d * targetMatrixData.d;
	var e = currentMatrixData.a * targetMatrixData.e + currentMatrixData.c * targetMatrixData.f + currentMatrixData.e;
	var f = currentMatrixData.b * targetMatrixData.e + currentMatrixData.d * targetMatrixData.f + currentMatrixData.f;
	var concatenatedMatrixData = { a : a, b : b, c : c, d : d, e : e, f : f};
	this.setMatrixData(concatenatedMatrixData);
}
org.silex.runtime.geom.Matrix.prototype.translate = function(x,y) {
	var translationMatrixData = { a : 1.0, b : 0.0, c : 0.0, d : 1.0, e : x, f : y};
	var translationMatrix = new org.silex.runtime.geom.Matrix(translationMatrixData);
	this.concatenate(translationMatrix);
}
org.silex.runtime.geom.Matrix.prototype.rotate = function(angle,transformationOrigin) {
	var angleInRad = angle / 180 * Math.PI;
	var rotatedMatrix = new org.silex.runtime.geom.Matrix();
	rotatedMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	if(angle == 90) {
		a = d = 0;
		c = b = 1;
	}
	else if(angle == 180) {
		a = d = -1;
		c = b = 0;
	}
	else if(angle == 270) {
		a = d = 0;
		c = b = -1;
	}
	else {
		a = d = Math.cos(angleInRad);
		c = b = Math.sin(angleInRad);
	}
	var rotationMatrixData = { a : a, b : b, c : c * -1, d : d, e : 0.0, f : 0.0};
	var rotationMatrix = new org.silex.runtime.geom.Matrix(rotationMatrixData);
	rotatedMatrix.concatenate(rotationMatrix);
	rotatedMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(rotatedMatrix);
}
org.silex.runtime.geom.Matrix.prototype.scale = function(scaleX,scaleY,transformationOrigin) {
	var scaledMatrix = new org.silex.runtime.geom.Matrix();
	scaledMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var scalingMatrixData = { a : scaleX, b : 0.0, c : 0.0, d : scaleY, e : 0.0, f : 0.0};
	var scalingMatrix = new org.silex.runtime.geom.Matrix(scalingMatrixData);
	scaledMatrix.concatenate(scalingMatrix);
	scaledMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(scaledMatrix);
}
org.silex.runtime.geom.Matrix.prototype.skew = function(skewX,skewY,transformationOrigin) {
	var skewedMatrix = new org.silex.runtime.geom.Matrix();
	skewedMatrix.translate(transformationOrigin.x,transformationOrigin.y);
	var skewingMatrixData = { a : 1.0, b : Math.tan(skewY), c : Math.tan(skewX), d : 1.0, e : 0.0, f : 0.0};
	var skewingMatrix = new org.silex.runtime.geom.Matrix(skewingMatrixData);
	skewedMatrix.concatenate(skewingMatrix);
	skewedMatrix.translate(transformationOrigin.x * -1,transformationOrigin.y * -1);
	this.concatenate(skewedMatrix);
}
org.silex.runtime.geom.Matrix.prototype.setRotation = function(angle,transformationOrigin) {
	var currentRotation = this.getRotation();
	var resetAngle = 360 - currentRotation;
	this.rotate(resetAngle,transformationOrigin);
	this.rotate(angle,transformationOrigin);
}
org.silex.runtime.geom.Matrix.prototype.getRotation = function() {
	var flip = this.getFlip();
	var scaleX = this.getScaleX();
	var skewX = this.getSkewX();
	var actualScaleX = Math.sqrt(scaleX * scaleX + skewX * skewX);
	var scaleY = this.getScaleY();
	var skewY = this.getSkewY() * flip;
	var actualScaleY = Math.sqrt(scaleY * scaleY + skewY * skewY);
	var rotationInRad = Math.atan2(skewY / actualScaleY - skewX / actualScaleX,scaleY / actualScaleY + scaleX / actualScaleX);
	var rotationInDeg = Math.round(rotationInRad * 180 / Math.PI);
	if(rotationInDeg < 0) {
		rotationInDeg = 360 + rotationInDeg;
	}
	return rotationInDeg;
}
org.silex.runtime.geom.Matrix.prototype.getFlip = function() {
	var scaleX = this.getScaleX();
	var scaleXSign = 0;
	if(scaleX >= 0) {
		scaleXSign = 1;
	}
	else {
		scaleXSign = -1;
	}
	var scaleY = this.getScaleY();
	var scaleYSign = scaleY >= 0?1:-1;
	var skewX = this.getSkewX();
	var skewXSign = skewX >= 0?1:-1;
	var skewY = this.getSkewY();
	var skewYSign = skewY >= 0?1:-1;
	if(scaleXSign == scaleYSign && skewXSign == skewYSign * -1) {
		return 1;
	}
	if(scaleXSign == scaleYSign * -1 && skewXSign == skewYSign) {
		return -1;
	}
	return 1;
}
org.silex.runtime.geom.Matrix.prototype.setScaleX = function(scaleXFactor,transformationOrigin) {
	var currentScaleX = this.getScaleX();
	var resetScaleX = 1 / currentScaleX;
	this.scale(resetScaleX,1,transformationOrigin);
	this.scale(scaleXFactor,1,transformationOrigin);
}
org.silex.runtime.geom.Matrix.prototype.getScaleX = function() {
	return this._matrixData.a;
}
org.silex.runtime.geom.Matrix.prototype.setScaleY = function(scaleYFactor,transformationOrigin) {
	var currentScaleY = this.getScaleY();
	var resetScaleY = 1 / currentScaleY;
	this.scale(1,resetScaleY,transformationOrigin);
	this.scale(1,scaleYFactor,transformationOrigin);
}
org.silex.runtime.geom.Matrix.prototype.getScaleY = function() {
	return this._matrixData.d;
}
org.silex.runtime.geom.Matrix.prototype.setTranslationX = function(translationX) {
	var currentTranslationX = this.getTranslationX();
	var resetTranslationX = currentTranslationX * -1;
	this.translate(resetTranslationX,0);
	this.translate(translationX,0);
}
org.silex.runtime.geom.Matrix.prototype.getTranslationX = function() {
	return this._matrixData.e;
}
org.silex.runtime.geom.Matrix.prototype.setTranslationY = function(translationY) {
	var currentTranslationY = this.getTranslationY();
	var resetTranslationY = currentTranslationY * -1;
	this.translate(0,resetTranslationY);
	this.translate(0,translationY);
}
org.silex.runtime.geom.Matrix.prototype.getTranslationY = function() {
	return this._matrixData.f;
}
org.silex.runtime.geom.Matrix.prototype.getSkewX = function() {
	return this._matrixData.c;
}
org.silex.runtime.geom.Matrix.prototype.getSkewY = function() {
	return this._matrixData.b;
}
org.silex.runtime.geom.Matrix.prototype.__class__ = org.silex.runtime.geom.Matrix;
hxjson2.JSONTokenType = { __ename__ : ["hxjson2","JSONTokenType"], __constructs__ : ["tUNKNOWN","tCOMMA","tLEFT_BRACE","tRIGHT_BRACE","tLEFT_BRACKET","tRIGHT_BRACKET","tCOLON","tTRUE","tFALSE","tNULL","tSTRING","tNUMBER","tNAN"] }
hxjson2.JSONTokenType.tUNKNOWN = ["tUNKNOWN",0];
hxjson2.JSONTokenType.tUNKNOWN.toString = $estr;
hxjson2.JSONTokenType.tUNKNOWN.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tCOMMA = ["tCOMMA",1];
hxjson2.JSONTokenType.tCOMMA.toString = $estr;
hxjson2.JSONTokenType.tCOMMA.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tLEFT_BRACE = ["tLEFT_BRACE",2];
hxjson2.JSONTokenType.tLEFT_BRACE.toString = $estr;
hxjson2.JSONTokenType.tLEFT_BRACE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tRIGHT_BRACE = ["tRIGHT_BRACE",3];
hxjson2.JSONTokenType.tRIGHT_BRACE.toString = $estr;
hxjson2.JSONTokenType.tRIGHT_BRACE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tLEFT_BRACKET = ["tLEFT_BRACKET",4];
hxjson2.JSONTokenType.tLEFT_BRACKET.toString = $estr;
hxjson2.JSONTokenType.tLEFT_BRACKET.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tRIGHT_BRACKET = ["tRIGHT_BRACKET",5];
hxjson2.JSONTokenType.tRIGHT_BRACKET.toString = $estr;
hxjson2.JSONTokenType.tRIGHT_BRACKET.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tCOLON = ["tCOLON",6];
hxjson2.JSONTokenType.tCOLON.toString = $estr;
hxjson2.JSONTokenType.tCOLON.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tTRUE = ["tTRUE",7];
hxjson2.JSONTokenType.tTRUE.toString = $estr;
hxjson2.JSONTokenType.tTRUE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tFALSE = ["tFALSE",8];
hxjson2.JSONTokenType.tFALSE.toString = $estr;
hxjson2.JSONTokenType.tFALSE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tNULL = ["tNULL",9];
hxjson2.JSONTokenType.tNULL.toString = $estr;
hxjson2.JSONTokenType.tNULL.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tSTRING = ["tSTRING",10];
hxjson2.JSONTokenType.tSTRING.toString = $estr;
hxjson2.JSONTokenType.tSTRING.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tNUMBER = ["tNUMBER",11];
hxjson2.JSONTokenType.tNUMBER.toString = $estr;
hxjson2.JSONTokenType.tNUMBER.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.tNAN = ["tNAN",12];
hxjson2.JSONTokenType.tNAN.toString = $estr;
hxjson2.JSONTokenType.tNAN.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONDecoder = function(s,strict) { if( s === $_ ) return; {
	this.strict = strict;
	this.tokenizer = new hxjson2.JSONTokenizer(s,strict);
	this.nextToken();
	this.value = this.parseValue();
	if(strict && this.nextToken() != null) this.tokenizer.parseError("Unexpected characters left in input stream!");
}}
hxjson2.JSONDecoder.__name__ = ["hxjson2","JSONDecoder"];
hxjson2.JSONDecoder.prototype.strict = null;
hxjson2.JSONDecoder.prototype.value = null;
hxjson2.JSONDecoder.prototype.tokenizer = null;
hxjson2.JSONDecoder.prototype.token = null;
hxjson2.JSONDecoder.prototype.getValue = function() {
	return this.value;
}
hxjson2.JSONDecoder.prototype.nextToken = function() {
	return this.token = this.tokenizer.getNextToken();
}
hxjson2.JSONDecoder.prototype.parseArray = function() {
	var a = new Array();
	this.nextToken();
	if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACKET) {
		return a;
	}
	else {
		if(!this.strict && this.token.type == hxjson2.JSONTokenType.tCOMMA) {
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACKET) {
				return a;
			}
			else {
				this.tokenizer.parseError("Leading commas are not supported.  Expecting ']' but found " + this.token.value);
			}
		}
	}
	while(true) {
		a.push(this.parseValue());
		this.nextToken();
		if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACKET) {
			return a;
		}
		else if(this.token.type == hxjson2.JSONTokenType.tCOMMA) {
			this.nextToken();
			if(!this.strict) {
				if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACKET) {
					return a;
				}
			}
		}
		else {
			this.tokenizer.parseError("Expecting ] or , but found " + this.token.value);
		}
	}
	return null;
}
hxjson2.JSONDecoder.prototype.parseObject = function() {
	var o = { };
	var key;
	this.nextToken();
	if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACE) {
		return o;
	}
	else {
		if(!this.strict && this.token.type == hxjson2.JSONTokenType.tCOMMA) {
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACE) {
				return o;
			}
			else {
				this.tokenizer.parseError("Leading commas are not supported.  Expecting '}' but found " + this.token.value);
			}
		}
	}
	while(true) {
		if(this.token.type == hxjson2.JSONTokenType.tSTRING) {
			key = Std.string(this.token.value);
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.tCOLON) {
				this.nextToken();
				o[key] = this.parseValue();
				this.nextToken();
				if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACE) {
					return o;
				}
				else if(this.token.type == hxjson2.JSONTokenType.tCOMMA) {
					this.nextToken();
					if(!this.strict) {
						if(this.token.type == hxjson2.JSONTokenType.tRIGHT_BRACE) {
							return o;
						}
					}
				}
				else {
					this.tokenizer.parseError("Expecting } or , but found " + this.token.value);
				}
			}
			else {
				this.tokenizer.parseError("Expecting : but found " + this.token.value);
			}
		}
		else {
			this.tokenizer.parseError("Expecting string but found " + this.token.value);
		}
	}
	return null;
}
hxjson2.JSONDecoder.prototype.parseValue = function() {
	if(this.token == null) this.tokenizer.parseError("Unexpected end of input");
	var $e = this.token.type;
	switch( $e[1] ) {
	case 2:
	{
		return this.parseObject();
	}break;
	case 4:
	{
		return this.parseArray();
	}break;
	case 10:
	{
		return this.token.value;
	}break;
	case 11:
	{
		return this.token.value;
	}break;
	case 7:
	{
		return true;
	}break;
	case 8:
	{
		return false;
	}break;
	case 9:
	{
		return null;
	}break;
	case 12:
	{
		if(!this.strict) return this.token.value;
		else this.tokenizer.parseError("Unexpected " + this.token.value);
	}break;
	default:{
		this.tokenizer.parseError("Unexpected " + this.token.value);
	}break;
	}
	return null;
}
hxjson2.JSONDecoder.prototype.__class__ = hxjson2.JSONDecoder;
org.silex.runtime.domObject.js.ContainerDOMObject = function(referenceToNativeDOMObject) { if( referenceToNativeDOMObject === $_ ) return; {
	org.silex.runtime.domObject.base.ContainerDOMObjectBase.call(this,referenceToNativeDOMObject);
}}
org.silex.runtime.domObject.js.ContainerDOMObject.__name__ = ["org","silex","runtime","domObject","js","ContainerDOMObject"];
org.silex.runtime.domObject.js.ContainerDOMObject.__super__ = org.silex.runtime.domObject.base.ContainerDOMObjectBase;
for(var k in org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype ) org.silex.runtime.domObject.js.ContainerDOMObject.prototype[k] = org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype[k];
org.silex.runtime.domObject.js.ContainerDOMObject.prototype.setSemantic = function(semantic) {
	org.silex.runtime.domObject.base.ContainerDOMObjectBase.prototype.setSemantic.call(this,semantic);
	var currentNativeDOMContent = this._referenceToNativeDOM.innerHTML;
	var currentNativeDOMAttributes = this._referenceToNativeDOM.attributes;
	var newReferenceToNativeDOM = js.Lib.document.createElement(semantic);
	newReferenceToNativeDOM.innerHTML = currentNativeDOMContent;
	{
		var _g1 = 0, _g = currentNativeDOMAttributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			newReferenceToNativeDOM.setAttribute(currentNativeDOMAttributes[i].nodeName,currentNativeDOMAttributes[i].nodeValue);
		}
	}
	this._referenceToNativeDOM.parentNode.replaceChild(newReferenceToNativeDOM,this._referenceToNativeDOM);
	this._referenceToNativeDOM = newReferenceToNativeDOM;
}
org.silex.runtime.domObject.js.ContainerDOMObject.prototype.__class__ = org.silex.runtime.domObject.js.ContainerDOMObject;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e1 ) {
			{
				var e = $e1;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e2 ) {
						{
							var e1 = $e2;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this));
}
Visitors.SERVER_URL = "?action=wp_ajax_add_poll&";
haxe.Timer.arr = new Array();
org.silex.runtime.resource.ResourceLoaderManager._isLoading = false;
js.Lib.onerror = null;
Visitors.main()