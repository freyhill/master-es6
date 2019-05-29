/**
 * @file: object
 * @author: leinov
 */

 /**
  * 属性的简单表达 
  * 如果属性名和值相同则可简写为{x:x,y:y} === {x,y}
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
const cfn = x => {
    return x*x;
}
const c2= {name:"leinov",age:18}

module.exports ={c1,cfn,c2}

const obj2={
    fn1(){
        console.log("方法再对象里的简介表达");
    },
    fn2(){
        console.log("方法再对象里的简介表达2");
    }
}

obj2.fn1();
obj2.fn2()

/**  
 * 属性名表达式
 * */
 const ages = 18;
 const add = "beijing"
 const obj3={
     ['name']:"leinov",
     [ages]:18,
     add
 }
 console.log(obj3.name,obj3.add);

 // 定义方法 在redux中handleActions会遇到这种使用
 const GET_INDEX_DATA = "GET_INDEX_DATA";
 const GET_LIST_DATA = "GET_LIST_DATA";
 const obj4 = {
     [GET_INDEX_DATA](state,action){
        return {...state,infodata:action.payload}
     },
     [GET_LIST_DATA](state,action){
        return {...state,infodata:action.payload}
     }
 }

 const info = obj4['GET_INDEX_DATA']({name:"leinov",sex:1},{payload:{add:"beijing",age:18}})
 console.log(info);


 /**
  * Object.assign()方法
  * 将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。 
  */
 {
    const obj5 = {
        name: "leinov",
        age: 18,
        add: "beijing"
      };
      
      const objAss = Object.assign({sex:1,job:"fe"},{like:"sing"}, obj5);
      //等同与下面写法
      console.log({...obj5,sex:1,job:"fe"});
      console.log("Object.assign:",objAss);
      // { sex: 1, job: "fe", name: "leinov", age: 18, add: "beijing"}
    
 }

 /**
  * Object.entries()方法
  * 返回一个给定对象自身可枚举[属性的键值对]数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）
  */
 {
    const obj6 = {
        name:"leinov",
        age:18,
        sex:1
    }
    const entries1 = Object.entries(obj6);
   console.log("Object.entries:",entries1);
   // output [["name","leinov"],["age",18],["sex":1]]
   console.log("Object.entries",Object.entries("leinov")); //[["0", "l"],["1", "e"],["2", "i"],["4", "o"],["5", "v"]]
 }
 
 /**
  * Object.keys()方法
  * 返回一个由一个给定对象的自身可枚举[属性]组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。
  */
 {
    const obj7 = {
         name:"leinov",
         age:18,
         add:"beijing"
    }
    const keys = Object.keys(obj7);
    console.log("Object.keys:",keys);//["name", "age", "add"] obj7属性名的数组
 }

 /**
  * Object.values()方法
  * 返回一个给定对象自身的所有可枚举[属性值]的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
  */
 {
    const obj8 = {
        name:"leinov",
        age:18,
        add:"beijing"
    }
    const values = Object.values(obj8);
    console.log("Object.values",values);
 }

 /**
  * Object.freeze()方法
  * 可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象
  */
 {
     const obj9 = {
         name:"leinov",
         age:18
     }
     const o2 = Object.freeze(obj9);
     o2.name="11"
     console.log('Object.freeze', o2);//{name: "leinov", age: 18}
 }

 /**
  * Object.seal()方法
  * 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性
  */
 {
     const obj10 = {
         name: 'leinov',
         age: 18
     }
     obj10.add = 'beijing';
     console.log('Obj10', obj10);
     Object.seal(obj10);
     obj10.company = 'zyb';
     console.log('Object.seal()', obj10);
 }