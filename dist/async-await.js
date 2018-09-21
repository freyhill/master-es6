"use strict";

require("babel-polyfill");

/**
 * @param {num}
 * @return {Promise}
 */
function promise(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  });
}

/**
 * @async
 * @return {Promise}
 */
async function asyncFunc() {
  try {
    var num = await promise(2);
    console.log(num);
    return num;
  } catch (error) {
    return error;
  }
}
asyncFunc().then(function (x) {
  console.log(x);
});