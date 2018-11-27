"use strict";

/**********************
 * @function 函数扩展
 * @createDate 2018-09-25
 *******************/

/**
 * 参数默认值
 *
 * @param {string} [name="who"]
 * @param {*} age
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

/*
 * rest参数
 * 用于获取函数的多余参数，
 * 这样就不需要使用arguments对象了。
 * rest 参数搭配的变量是一个数组，
 * 该变量将多余的参数放入数组中。
 */

function sum(name) {
  //  ...arr 后面不能再接参数
  var value = 0;

  for (var _len = arguments.length, arr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arr[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      value += val;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(name + "\u7B97\u4E0B\u6765\u7684\u503C\u662F:" + value);
  return value;
}

sum("leinov", 1, 2, 3, 4);

// name属性
var myfn = function myfn(x) {
  return x + 1;
};
console.log(myfn.name); // myfn