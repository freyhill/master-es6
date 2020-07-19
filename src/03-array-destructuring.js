/**
 * @subject : arry destructuring
 * @author : leinov
 * @date : 2018-09-28
 */

/**
 * [数组解构赋值]
 *
 * 从数组中提取值，按照对应位置，对变量赋值
 */
const [num1, num2, num3] = [1, 2, 3];
console.log(num1, num2, num3); // 1,2,3

const [first, ...others] = [1, 2, 3, 4, 5];
// others is a arry
console.log(first, others); // 1,[2,3,4,5]


/**
 * [...解构剩余项]
 * 
 */
const [ab, bc, cd, de, ef, ...fg] = "hello world";
console.log(ab, bc, cd, de, ef, fg); // h e l l o [ ' ', 'w', 'o', 'r', 'l', 'd' ]

/**
 * [交换变量]
 */

let change1 = 1;
let change2 = 2;
[change1, change2] = [change2, change1];
console.log(change1, change2); // 2 1

// 函数返回值
function returnValue() {
	return [1, 2, 3, 4, 5, 6];
}

const [r1, r2, r3, ...vothers] = returnValue(); // 解构函数返回的数组
console.log(r1, r2, r3, vothers); // 1 2 3 [ 4, 5, 6 ]