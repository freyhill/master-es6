/**
 * @function 函数扩展
 * @createDate 2018-09-25
**/


const {log} = console;
/**
 * [1. 参数默认值]
 *
 * @param {string} [times = 5]
 * @param {*} name
 */
function sports(times = 5, name) {
	return `${name} sports ${times} times per week`;
}

log(sports(3, 'leinov'));

function res({code = 0, data = {}, messge = '数据返回失败'} = {}) {
	if(code === 200) {
		return data;
	} else {
		return messge;
	}
}
console.log(
	res({
		code: 401,
		data: {},
		messge: '登陆失效'
	})
);

/*
 * [2. rest参数]
 * 用于获取函数的剩余参数，
 * 这样就不需要使用arguments对象了。
 * rest 参数搭配的变量是一个数组，
 * 该变量将多余的参数放入数组中。
 */

 function sum(name,...arr){ //  ...arr必须出现在形参的最后一位，只能用依次，后面不能再接参数
	let value = 0;
	for (let val of arr) {
		value += val;
	}
	console.log(`${name}算下来的值是:${value}`);
	return value;
 }
 
 sum("leinov",1,2,3,4);

/*
 * [3. name属性]
 */
 const myfn = x=> x+1;
 console.log(myfn.name); // myfn