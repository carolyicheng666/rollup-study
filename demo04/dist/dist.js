(function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Person = function () {
  function Person(name) {
    var gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '男';
    classCallCheck(this, Person);

    this.name = name;
    this.gender = gender;
  }

  createClass(Person, [{
    key: 'say',
    value: function say() {
      console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + '\uFF0C\u662F\u4E00\u4E2A' + this.gender + '\u751F');
    }
  }]);
  return Person;
}();

var Man = function (_Person) {
  inherits(Man, _Person);

  function Man(name) {
    classCallCheck(this, Man);
    return possibleConstructorReturn(this, (Man.__proto__ || Object.getPrototypeOf(Man)).call(this, name, '男'));
  }

  return Man;
}(Person);

new Man('Carol').say();

}());
