/**
 * @file: arrow function
 * @author: leinov
 */

const arr = [1,2,3,4,5];

//无参数
const fn= ()=>{
    console.log("这是一个无参数的函数");
}
fn();

// 一个参数
arr.map(item=> item * 2);

arr.map((item) => { // 参数有括号
    console.log("one param" ,item);
})

const fn2 = x => {
    console.log("这是一个参数的",x*x);
} 
fn2(3);

// 多个参数
arr.map((item,index) => {
    console.log("多个参数",item ,index);
})

// 默认值
const obj = {
    sum: (x = 1, y = 2)=>{
        console.log(x+y);
    }
}
obj.sum(1,9);

/**
 * this
 * 在箭头函数出现之前，
 * 每个新定义的函数都有它自己的 this值（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，
 * 如果该函数被作为“对象方法”调用则为基础对象等）。This被证明是令人厌烦的面向对象风格的编程。
 *
 * @class Person
 */
class Person{
    constructor(obj){
        this.name = obj.name;
    }
    getName(){
        setTimeout(() => {
            console.log(this.name);
        },5000)
    }
    getAge() {
        console.log(this.name);
    }
  }
  var p = new Person({name:"xxx"});
  p.getName();
  this.name = 'leinov global';
  let object = {
      name: 'leinov',
      deepObj: {
        name: 'inner leinov',
        getName: () => {
            return this.name;
        },
        getName1: function() {
            return () => {
                return this.name;
            }
        }
      },
      arrowGetName: () => {
        return this.name;
      },
      normalGetName: function() {
          return this.name;
      }
  }

let n1 = object.arrowGetName(); // leinov global
let n2 = object.normalGetName(); // leinov
// 多层嵌套的箭头函数的this也是指向最外层
let n3 = object.deepObj.getName(); // leinov global
// 箭头函数的this取决于该函数外部非箭头函数的this 值
let n4 = object.deepObj.getName1()(); // inner leinov
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);