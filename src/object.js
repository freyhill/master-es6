/**
 * @file: object
 * @author: leinov
 */

 /**
  * 属性的简单表达 
  * */ 
 // 简单实例
const name = "leinov";
const age = 18;
const reqdata = {name,age};
console.log(reqdata); //{ name: 'leinov', age: 18 }

function fn(x,y){
    return {x,y}
}
const data = fn(1,2)
console.log(data); // {x:1,y:2}

// CommonJS 模块输出一组变量非常合适使用简洁写法。
const c1 = 1;
const cfn = x=>{
    return x*x;
}
const c2= {name:"leinov",age:18}

module.exports ={c1,cfn,c2}