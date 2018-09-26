"use strict";

/**
 * @function
 * @createDate 2018-09-25
 */

/**
 * @param
 * 参数默认值
 */

function foo() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "who";
  var age = arguments[1];

  console.log(name + " is " + age);
}

foo(undefined, 20);

function foo2() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: name, age: age },
      _ref$name = _ref.name,
      name = _ref$name === undefined ? 2 : _ref$name,
      _ref$age = _ref.age,
      age = _ref$age === undefined ? 3 : _ref$age;

  console.log(name, age);
}
foo2({ name: 4, age: 4 });