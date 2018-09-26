/**
 * @function
 * @createDate 2018-09-25
 */

/**
 * @param
 * 参数默认值
 */

function foo(name = "who", age) {
	console.log(`${name} is ${age}`);
}

foo(undefined, 20);

function foo2 ({name=2,age=3}={name,age}){
console.log(name,age);
}
foo2({name:4,age:4});
