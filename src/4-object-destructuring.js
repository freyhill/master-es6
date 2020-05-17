/**
 * @subject : object destructuring
 * @author : leinov
 * @date : 2018-09
 */

/**
 * [1.对象结构赋值]
 *
 * 变量必须与属性同名，才能取到正确的值
 */
const { time, time2 } = { time: "2018-09-27", time2: "2018-09-28" };
console.log(time, time2); // 2018-09-27 2018-09-28

/**
 * [2.别名]
 *
 * 如果解构的属性名跟已经存在可以使用别名
 */
const { foo: foo1, bar: bar2 } = { foo: "aaa", bar: "bbb" };
console.log(foo1, bar2); // aaa bbb

/**
 * [3.对象解构的默认值]
 *
 * 默认值生效的条件是，对象的属性值严格等于undefined null则不生效 下面有例
 */

function request({ url = "https://pai.config.com", data = {}, method = "GET" } = {}) {
	console.log(url, data, method);
}
request(); // no param show default
request({ data: { account: "leinov" }, method: "POST" }); // has param show param
request({ data: null, method: "POST" }); // 显示传递的实参 null

/**
 * [4. ... 解构剩余项]
 *
 * ...解构剩余项目组成新的对象
 */
function returnObj() {
	return {
		name: "leinov",
		add: "Beijing China",
		position: " front-end engineer",
		age: "18",
	};
}

const {
	name,
	add,
	position,
	...more
} = returnObj();

console.log(name, add, position, more); // leinov Beijing China  front-end engineer { age: '22' }



/**
 * [4.解构返回值]
 *
 */
const jsonData = {
	code: 0,
	message: "请求成功",
	data: {
		name: "leinov",
		age: "24",
		address: "Beijing",
	},
};
const { code, message, data } = jsonData;
console.log(code, message, data);

/**
 * [5.解构模块方法]
 *
 */
const { get, post } = require("axios");

get("http://www.leinov.com/data/wepylist.json").then((res) => {
	const { status, data: { data } } = res;
	console.log(status, data);
});

const {log} = console;
log(`is it cool?`)