/**
箭头函数和this




**/

var evens = [1,2,3,2,2,3];

var odds = evens.map(v => v+1);
console.log(odds); // [2,3,4,3,3,4]

var odds2 = evens.map((v,i) => v+i);
console.log(odds2);

var m = (v,i) => v*i+7;
console.log(m(1,3));