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
function foo(name = "who", age) {
	console.log(`${name} is ${age}`);
}

foo(undefined, 20);

function foo2 ({name=2,age=3}={name,age}){
console.log(name,age);
}
foo2({name:4,age:4});

/*
 * rest参数
 * 用于获取函数的多余参数，
 * 这样就不需要使用arguments对象了。
 * rest 参数搭配的变量是一个数组，
 * 该变量将多余的参数放入数组中。
 */

 function sum(name,...arr){ //  ...arr 后面不能再接参数
	let value = 0;
	for (let val of arr) {
		value += val;
	}
	console.log(`${name}算下来的值是:${value}`);
	return value;
 }
 
 sum("leinov",1,2,3,4);

 // name属性
 const myfn = x=> x+1;
 console.log(myfn.name); // myfn