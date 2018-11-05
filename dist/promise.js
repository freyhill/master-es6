"use strict";

/* eslint no-console: ["error", { allow: ["warn"] }] */

/************************************
* promise
*************************************/
function game(time) {
	return new Promise(function (resolve, reject) {
		if (time > 35) {
			resolve("大吉大利，今晚吃鸡");
		} else {
			reject("再接再厉，明晚吃鸡");
		}
	});
}

game(35).then(function (res) {
	console.log(res);
}).catch(function (err) {
	console.log("err", err);
});

/************************************
* Promise.all

*************************************/

function p1(x) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (x > 0) {
				resolve("p1成功");
			} else {
				reject("p1失败");
			}
		}, 1000);
	});
}

function p2(x) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (x > 0) {
				resolve("p2成功");
			} else {
				reject("p2失败");
			}
		}, 3000);
	});
}

/**
 * Promise.all([p1,p2]);
 */
Promise.all([p1(2), p2(0)]).then(function (res) {
	console.log(res);
}).catch(function (err) {
	console.log(err); //p2失败
});

Promise.all([p1(2), p2(5)]).then(function (res) {
	console.log(res); //["p1成功", "p2成功"]
}).catch(function (err) {
	console.log(err);
});

/************************************
* Promise.race

*************************************/

function timeout() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve("超时");
		}, 3000);
	});
}

function getData(time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve("数据请求成功");
		}, time * 1000);
	});
}
Promise.race([timeout(), getData(2)]).then(function (res) {
	console.log(res);
}).catch(function (err) {
	console.log(err);
});