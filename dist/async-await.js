"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @async
 * @return {Promise}
 */
var asyncFunc = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var num;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return promise(2);

					case 3:
						num = _context.sent;

						console.log(num);
						return _context.abrupt("return", num);

					case 8:
						_context.prev = 8;
						_context.t0 = _context["catch"](0);
						return _context.abrupt("return", _context.t0);

					case 11:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 8]]);
	}));

	return function asyncFunc() {
		return _ref.apply(this, arguments);
	};
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @async
 */
require("babel-polyfill");

/**
 * @param {num}
 * @return {Promise}
 */
function promise(num) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (num % 2 === 0) {
				resolve(num);
			} else {
				reject(num);
			}
		}, 1000);
	});
}

asyncFunc().then(function (x) {
	console.log(x);
});