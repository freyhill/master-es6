"use strict";

/**
* @destructuring
* 从数组和对象中提取值 对变量进行赋值
*/

// es5
var a = 1;
var b = 2;
var c = 3;

// es6 从数组中提取值，按照对应位置，对变量赋值
var num1 = 1,
    num2 = 2,
    num3 = 3;

console.log(num1, num2, num3); // 1,2,3

var first = 1,
    others = [2, 3, 4, 5];
// others is a arry

console.log(first, others); // 1,[2,3,4,5]

/**
 * [与解构赋值默认值结合使用]
 *
 * @param {String} value
 * @param {Object} value
 */
function getData() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$method = _ref.method,
      method = _ref$method === undefined ? "GET" : _ref$method,
      data = _ref.data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers;

  console.log(url);
  console.log(method);
  console.log(data);
  console.log(headers);
}
getData("leinov.com", { data: { name: 1 } });

var obj = { one: "hello", two: "world" };
var _obj$one = obj.one,
    one = _obj$one === undefined ? x : _obj$one,
    _obj$two = obj.two,
    two = _obj$two === undefined ? y : _obj$two;

console.log(one, two);

// 对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
var _foo$bar = { foo: "aaa", bar: "bbb" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。