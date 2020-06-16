/**
 * @file: set
 * @author: leinov
 * @date: 202006
 */

 const set1 = new Set();
 set1.add(1).add(2).add(3).add(2);
 console.log(set1);
 const arr1 = Array.from(set1)
 console.log(arr1);

 // 去重

let set2 = ['a', 'b', 'c', 'd', 'f', 'b'];
let uniqueSet2 = Array.from(new Set(set2));
console.log(uniqueSet2); // [ 'a', 'b', 'c', 'd', 'f' ]

// set方法
const set3 = new Set();
set3.add('good').add('best').add('worth');
console.log(set3);
set3.forEach(element => {
        console.log(element);
});

console.log(set3.has('good')); // true
console.log(set3.delete('good'));
console.log(set3);
set3.clear();
console.log(set3);
