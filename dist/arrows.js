"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file: arrow function
 * @author: leinov
 */

var arr = [1, 2, 3, 4, 5];

//无参数
var fn = function fn() {
    console.log("这是一个无参数的函数");
};
fn();

// 一个参数
arr.map(function (item) {
    //参数无括号
    console.log("one param", item);
});
arr.map(function (item) {
    // 参数有括号
    console.log("one param", item);
});
var fn2 = function fn2(x) {
    console.log("这是一个参数的", x * x);
};
fn2(3);

// 多个参数
arr.map(function (item, index) {
    console.log("多个参数", item, index);
});

// 默认值
var obj = {
    sum: function sum() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        console.log(x + y);
    }
};
obj.sum(1, 9);

/**
 * this
 * 在箭头函数出现之前，
 * 每个新定义的函数都有它自己的 this值（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，
 * 如果该函数被作为“对象方法”调用则为基础对象等）。This被证明是令人厌烦的面向对象风格的编程。
 *
 * @class Person
 */

var Person = function () {
    function Person(obj) {
        (0, _classCallCheck3.default)(this, Person);

        this.name = obj.name;
    }

    (0, _createClass3.default)(Person, [{
        key: "getName",
        value: function getName() {
            var _this = this;

            setInterval(function () {
                console.log(_this.name);
            }, 5000);
        }
    }]);
    return Person;
}();

var p = new Person({ name: "xxx" });
p.getName();