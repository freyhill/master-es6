/**
 * @async
 */
require("babel-polyfill");

/**
 * @param {num}
 * @return {Promise}
 */
function promise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    const num = await promise(2);
    console.log(num);
    return num;
  } catch (error) {
    return error;
  }
}

asyncFunc().then((x) => {
  console.log(x);
});
