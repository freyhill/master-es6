> @subject : es6 destructuring  
  @author : leinov    
  @date : 2018-09-28  
  @code : "../src/destructuring.js"
### 数组解构赋值

>从数组中提取值，按照对应位置，对变量赋值
```
const [num1, num2, num3] = [1, 2, 3];
console.log(num1, num2, num3); // 1,2,3

const [first, ...others] = [1, 2, 3, 4, 5];
// others is a arry
console.log(first, others); // 1,[2,3,4,5]
```

### 对象结构赋值

> 变量必须与属性同名，才能取到正确的值
```
const { time, time2 } = { time: "2018-09-27", time2: "2018-09-28" };
console.log(time, time2); // 2018-09-27 2018-09-28
```
> 对象的解构赋值是下面形式的简写
```
const { foo: foo1, bar: bar2 } = { foo: "aaa", bar: "bbb" };
console.log(foo1, bar2); // "aaa" "bbb"
```
> 即对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

 ### 对象解构的默认值

 > 默认值生效的条件是，对象的属性值严格等于undefined null则不生效 下面有例

 ```
function objTest({ url = "https://pai.config.com", data = {}, method = "GET" } = {}) {
	console.log(url, data, method);
}
objTest(); // no param show default
objTest({ data: { account: "leinov" }, method: "POST" }); // has param show param
objTest({ data: null, method: "POST" }); // 显示传递的实参 null
```

### 字符串解构赋值
```
const [ab, bc, cd, de, ef, ...fg] = "hello world";
console.log(ab, bc, cd, de, ef, fg); // h e l l o [ ' ', 'w', 'o', 'r', 'l', 'd' ]
```

### 使用

#### 交换变量
```
let change1 = 1;
let change2 = 2;
[change1, change2] = [change2, change1];
console.log(change1, change2); // 2 1
```
#### 函数返回多个值
```
function returnValue() {
	return [1, 2, 3, 4, 5, 6];
}

const [r1, r2, r3, ...vothers] = returnValue(); // 解构函数返回的数组
console.log(r1, r2, r3, vothers); // 1 2 3 [ 4, 5, 6 ]

function returnObj() {
	return {
		name: "leinov",
		add: "Beijing China",
		position: " Front-End developer",
		age: "22",
	};
}

const {
	name,
	add,
	position,
	...others2
} = returnObj();

console.log(name, add, position, others2); // leinov Beijing China  Front-End developer { age: '22' }
```
#### 函数的参数(常用)
```
function paramTest([x, y, z, ...o]) {
	console.log(x, y, z, o);
}
paramTest(["param1", "param2", "param3", "param4", "param5"]); // param1 param2 param3 [ 'param4', 'param5' ]

function paramTest2({ paramx = "leinov", paramy, paramz }) {
	console.log(paramx, paramy, paramz);
}
paramTest2({ paramx: "join", paramy: 24, paramz: "Beijing" }); // join 24 Beijing
```
#### 提取json数据
```
const jsonData = {
	code: 0,
	message: "请求成功",
	data: {
		name: "leinov",
		age: "24",
		address: "Beijing",
	},
};
//非常实用
const { code, message, data } = jsonData;
console.log(code, message, data); // leinov 24 Beijing
```
#### 模块儿指定方法（常用）
```
const { get, post } = require("axios");

get("http://www.leinov.com/data/wepylist.json").then((res) => {
	const { status, data: { data } } = res;//非常实用
	console.log(status, data);
});

```
