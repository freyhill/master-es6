/* eslint no-console: ["error", { allow: ["warn"] }] */

/************************************
* promise
*************************************/
function game(time){
	return new Promise((resolve,reject)=>{
		if(time > 5){
			resolve("大吉大利，今晚吃鸡");
		}else{
			reject("再接再厉，明晚吃鸡");
		}
	});
}

game(35).then((res)=>{
	console.log(res);
}).catch(err=>{
	console.log("err",err);
});


/************************************
* Promise.all

*************************************/

function p1(x) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(x > 0){
				resolve("p1成功");
			}else{
				reject("p1失败");
			}
		}, 1000);
	});
}

function p2(x) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(x > 0){
				resolve("p2成功");
			}else{
				reject("p2失败");
			}
		},3000);
	});
}


/**
 * Promise.all([p1,p2]);
 */
Promise.all([p1(2), p2(0)]).then((res)=>{
	console.log('Promise.all', res);
}).catch(err => {
	console.log(err); //p2失败
});

Promise.all([p1(2), p2(5)]).then((res)=>{
	console.log('Promise.all--- 全都请求成功', res); //["p1成功", "p2成功"]
}).catch(err=>{
	console.log(err);
});


/**
 * Promise.race
 **/

function timeout(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("请求超时，请稍后重试！");
		}, 3000);
	});
}

function getData(time){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("数据请求成功");
		}, time * 1000);
	});
}

// 未超时案例
Promise.race([timeout(), getData(2)]).then((res)=>{
	console.log('Promise.race', res);
}).catch(err => {
	console.log(err);
});

// 超时案例
Promise.race([timeout(), getData(4)]).then((res)=>{
	console.log(res);
}).catch(err => {
	console.log(err);
});
