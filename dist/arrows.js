"use strict";

/**
箭头函数和this




**/

var evens = [1, 2, 3, 2, 2, 3];

var odds = evens.map(function (v) {
  return v + 1;
});
console.log(odds); // [2,3,4,3,3,4]

var odds2 = evens.map(function (v, i) {
  return v + i;
});
console.log(odds2);

var m = function m(v, i) {
  return v * i + 7;
};
console.log(m(1, 3));