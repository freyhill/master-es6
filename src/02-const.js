/**  
 * @file:const
 * @desc:声明时必须赋值，且不可改变 
 **/
// 1. 常量
const PRICE = 100;
//PRICE = 11; // 报错 值不可修改

//const P1 ;
//P1 = 1; // 报错 声明同时就赋值

// 2.对象
// const 申明的常量不可修改指的是不能修改变量的指针，所以修改对象内的属性是可以的
const obj = { name: 'leinov'}
obj.name = 'lisa'
console.log(obj);

// 但重新赋值就会报错，因为修改了指针的指向
obj = {age: 18}