"use strict";

/**
 * @file: object
 * @author: leinov
 */

/**
 * 属性的简单表达 
 * */
// 简单实例
var name = "leinov";
var age = 18;
var reqdata = { name: name, age: age };
console.log(reqdata); //{ name: 'leinov', age: 18 }

function fn(x, y) {
  return { x: x, y: y };
}
var data = fn(1, 2);
console.log(data); // {x:1,y:2}

// CommonJS 模块输出一组变量非常合适使用简洁写法。
var c1 = 1;
var cfn = function cfn(x) {
  return x * x;
};
var c2 = { name: "leinov", age: 18 };

module.exports = { c1: c1, cfn: cfn, c2: c2 };