'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var index = 42;

function r () {
  var result = _.compact([0, 1, false, 2, '', 3, index]);
  console.log('the answer is ' + result);
}

r();
