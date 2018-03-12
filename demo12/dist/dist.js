'use strict';

var index = 42;

var name = "demo12";
var version = "1.0.0";
var description = "";
var main = "index.js";
var scripts = {"test":"echo \"Error: no test specified\" && exit 1","dev":"rollup -c --environment NODE_ENV:development","build":"rollup -c --environment NODE_ENV:production"};
var keywords = [];
var author = "carolyicheng666";
var license = "ISC";
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	keywords: keywords,
	author: author,
	license: license
};

function r () {
  console.log('the answer is ' + index + ', the version is ' + pkg.version);
}

r();
