/**
 * @file: Map
 * @author: leinov
 * @date: 202006
 * @desc: 可以用任意类型的值作为对象的键
 */

 const m1 = new Map();
 const studentInfo = {
     name: 'leinov',
     age: 18,
     address: 'beijing'
 }
 const courseInfo = {
     course: 'English',
     score: 90,
 }
 m1.set(studentInfo, courseInfo);
 console.log(m1);

 m1.forEach((value, key) => {
    console.log(value.score, key.name); // 90 leinov
 })
 console.log('111');