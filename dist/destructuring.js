"use strict";

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toArray2 = require("babel-runtime/helpers/toArray");

var _toArray3 = _interopRequireDefault(_toArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @destructuring
* 从数组和对象中提取值 对变量进行赋值
*/

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

/**
 * [对象结构赋值]
 *
 * 量必须与属性同名，才能取到正确的值
 */
var _time$time = { time: "2018-09-27", time2: "2018-09-28" },
    time = _time$time.time,
    time2 = _time$time.time2;

console.log(time, time2); // 2018-09-27 2018-09-28

// 对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
var _foo$bar = { foo: "aaa", bar: "bbb" },
    foo1 = _foo$bar.foo,
    bar2 = _foo$bar.bar;
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

console.log(foo1, bar2);

/**
 * [对象解构的默认值]
 * 默认值生效的条件是，对象的属性值严格等于undefined null则不生效 下面有例
 */
var _ref2 = {},
    _ref2$objx = _ref2.objx,
    objx = _ref2$objx === undefined ? 3 : _ref2$objx;

console.log(objx);

// 用例
function objTest() {
	var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref3$url = _ref3.url,
	    url = _ref3$url === undefined ? "https://pai.config.com" : _ref3$url,
	    _ref3$data = _ref3.data,
	    data = _ref3$data === undefined ? {} : _ref3$data,
	    _ref3$method = _ref3.method,
	    method = _ref3$method === undefined ? "GET" : _ref3$method;

	console.log(url, data, method);
}
objTest(); // no param show default
objTest({ data: { account: "leinov" }, method: "POST" }); // has param show param
objTest({ data: null, method: "POST" }); // 显示传递的实参 null


/**
 * [字符串解构赋值]
 *
 */

var _helloWorld = "hello world",
    _helloWorld2 = (0, _toArray3.default)(_helloWorld),
    ab = _helloWorld2[0],
    bc = _helloWorld2[1],
    cd = _helloWorld2[2],
    de = _helloWorld2[3],
    ef = _helloWorld2[4],
    fg = _helloWorld2.slice(5);

console.log(ab, bc, cd, de, ef, fg); // h e l l o [ ' ', 'w', 'o', 'r', 'l', 'd' ]

/**
 * 【用途】
 */

// 1.交换变量
var change1 = 1;
var change2 = 2;
var _ref4 = [change2, change1];
change1 = _ref4[0];
change2 = _ref4[1];

console.log(change1, change2); // 2 1

// 2.函数返回多个值

function returnValue() {
	return [1, 2, 3, 4, 5, 6];
}

var _returnValue = returnValue(),
    _returnValue2 = (0, _toArray3.default)(_returnValue),
    r1 = _returnValue2[0],
    r2 = _returnValue2[1],
    r3 = _returnValue2[2],
    vothers = _returnValue2.slice(3); // 解构函数返回的数组


console.log(r1, r2, r3, vothers); // 1 2 3 [ 4, 5, 6 ]

function returnObj() {
	return {
		name: "leinov",
		add: "Beijing China",
		position: " Front-End developer",
		age: "22"
	};
}

var _returnObj = returnObj(),
    name = _returnObj.name,
    add = _returnObj.add,
    position = _returnObj.position,
    others2 = (0, _objectWithoutProperties3.default)(_returnObj, ["name", "add", "position"]);

console.log(name, add, position, others2); // leinov Beijing China  Front-End developer { age: '22' }

// 3.函数的参数
function paramTest(_ref5) {
	var _ref6 = (0, _toArray3.default)(_ref5),
	    x = _ref6[0],
	    y = _ref6[1],
	    z = _ref6[2],
	    o = _ref6.slice(3);

	console.log(x, y, z, o);
}
paramTest(["param1", "param2", "param3", "param4", "param5"]); // param1 param2 param3 [ 'param4', 'param5' ]

function paramTest2(_ref7) {
	var _ref7$paramx = _ref7.paramx,
	    paramx = _ref7$paramx === undefined ? "leinov" : _ref7$paramx,
	    paramy = _ref7.paramy,
	    paramz = _ref7.paramz;

	console.log(paramx, paramy, paramz);
}
paramTest2({ paramx: "join", paramy: 24, paramz: "Beijing" }); // join 24 Beijing

// 4.提起json数据
var jsonData = {
	code: 0,
	message: "请求成功",
	data: {
		name: "leinov",
		age: "24",
		address: "Beijing"
	}
};
var code = jsonData.code,
    message = jsonData.message,
    data = jsonData.data;

console.log(code, message, data);

// 5.模块儿指定方法

var _require = require("axios"),
    get = _require.get,
    post = _require.post;

get("http://www.leinov.com/data/wepylist.json").then(function (res) {
	var status = res.status,
	    data = res.data.data;

	console.log(status, data);
});