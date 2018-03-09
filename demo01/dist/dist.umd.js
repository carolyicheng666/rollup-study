(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.result = factory());
}(this, (function () { 'use strict';

function logA() {
  console.log('function logA called');
}

var index = logA()

return index;

})));
