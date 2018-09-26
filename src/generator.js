/**
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

import axios from "axios";

function* gen() {
	yield axios("http://www.leinov.com/data/wepylist.json");
	yield axios("http://www.leinov.com/data/wepylist.json");
}

const resData = gen();
const result1 = resData.next();
result1.value.then((res) => {
	console.log(res.data);
});

const result2 = resData.next();
result2.value.then((res) => {
	console.log(res.data);
});
