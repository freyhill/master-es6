/**
 * @subject : 模版字符串
 * @author : leinov
 * @date : 2018-09
 */

 const {log} = console;
/**
 * [1.拼接变量]
 * 使用`${变量}`来拼接字符串
 */
const name = "Bob";
const time = "today";
const userInfo = `Hello ${name}, how are you ${time}?`;
log(userInfo);


/**
 * [2.支持多行]
 */

const des = `this
is
a
long
desc

`;

log(des);


/**
 * [3.js代码]
 * 可以拼接js运算或方法
 */

 const value = 
 `
 ${3* 3}
 ${Math.random()}
 `;
 log(value)

 /**
 * [4.带标签的模板字符串]
 */
const role = 'Batman'
const gender = 1;


function strFun(string, role, gender) {
    console.log(string, role, gender); // [ '', ' is a ', '' ] 'iron man' 0
    // 修改gender的可读性
    gender = gender === 1 ? 'male' : 'female';
    return `${role} ${string[1]} ${gender}` 
}
const address = strFun`${role} is a ${gender}`

console.log(address);