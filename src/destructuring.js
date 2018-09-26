/**
* @destructuring
* 从数组和对象中提取值 对变量进行赋值
*/

// es5
const a = 1;
const b = 2;
const c = 3;

// es6 从数组中提取值，按照对应位置，对变量赋值
const [num1, num2, num3] = [1, 2, 3];
console.log(num1, num2, num3); // 1,2,3

const [first, ...others] = [1, 2, 3, 4, 5];
// others is a arry
console.log(first, others); // 1,[2,3,4,5]

/**
 * [与解构赋值默认值结合使用]
 *
 * @param {String} value
 * @param {Object} value
 */
function getData(url = "", { method = "GET", data, headers = {} } = {}) {
	console.log(url);
	console.log(method);
	console.log(data);
	console.log(headers);
}
getData("leinov.com", { data: { name: 1 } });


const obj = { one: "hello", two: "world" };
const { one = x, two = y} = obj;
console.log(one, two);

// 对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
