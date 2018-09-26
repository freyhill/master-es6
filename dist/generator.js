"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(gen); /**
                                                             *
                                                             * 创建一个generator函数
                                                             * 需要安装 npm install --save-dev babel-plugin-transform-runtime 插件并在 .babelrc中配置
                                                             * {
                                                             *	 "presets": ["es2015","stage-0"],
                                                             *	 "plugins": [
                                                             *     ["transform-runtime", {
                                                             *       "polyfill": false,
                                                             *       "regenerator": true
                                                             *     }]
                                                             *   ]
                                                             * }
                                                             */

function gen() {
  return _regenerator2.default.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _axios2.default)("http://www.leinov.com/data/wepylist.json");

        case 2:
          _context.next = 4;
          return (0, _axios2.default)("http://www.leinov.com/data/wepylist.json");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var resData = gen();
var result1 = resData.next();
result1.value.then(function (res) {
  console.log(res.data);
});

var result2 = resData.next();
result2.value.then(function (res) {
  console.log(res.data);
});