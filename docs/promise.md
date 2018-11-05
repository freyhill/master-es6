
#### 了解promise
promise字面意思就是“许诺，保证”，先具象到现实中的一个简单的例子来认识promise。我们用吃鸡来举例，假如我们在玩一场吃鸡游戏，这个游戏有三种状态
* 吃鸡中
* 恭喜 大吉大利吃鸡了
* 失败 再接再厉
将这个状态映射到promise在程序中的状态就是
* Pending (程序执行中)
* Fulfilled(成功)
* onRejected(失败)
```
function chiji(){
  return new Promise(resolve,reject){
      if(吃鸡){
        resolve("吃鸡啦")
      }else{
        reject("没吃鸡")
      }
  }
}
chiji.then(()=>{

  }).catch(a=>{

    })

```
> 除promise对象规定的方法(这里的 then 或 catch)以外的方法都是不可以使用的， 而不会像回调函数方式那样可以自己自由的定义回调函数的参数，而必须严格遵守固定、统一的编程方式来编写代码。

> promise的功能是可以将复杂的异步处理轻松地进行模式化， 这也可以说得上是使用promise的理由之一。

##### 创建
> 从构造函数 Promise 来创建一个新建新promise对象作为接口。
要想创建一个promise对象、可以使用new来调用Promise的构造器来进行实例化
```
var promise = new Promise(function(resolve, reject) {
    // 处理成功和失败的返回结果
    // 处理结束后、调用resolve 或 reject
});
```

##### 实例方法
> 对通过new生成的promise对象为了设置其值在 resolve(成功) / reject(失败)时调用的回调函数 可以使用promise.then() 实例方法。
```
promise.then(onFulfilled, onRejected)
```
* resolve(成功)时 onFulfilled 会被调用
* reject(失败)时 onRejected 会被调用

* 只对异常处理promise.catch(onRejected)


##### Promise工作流
```
function asyncFunction() {
    //(1)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);
    });
}
//(2)
asyncFunction().then(function (value) {
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    console.log(error);
});
```
* (1)Promise构造器之后，会返回一个promise对象
* (2)对于这个promise对象，我们调用它的 then 方法来设置resolve后的回调函数， catch 方法来设置发生错误时的回调函数。


##### Promise状态
>用new Promise 实例化的promise对象有以下三个状态。

* "has-resolution" - Fulfilled
resolve(成功)时。此时会调用 onFulfilled

* "has-rejection" - Rejected
reject(失败)时。此时会调用 onRejected

* "unresolved" - Pending
既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态等

#### 编写Promise代码
>创建promise对象的流程如下所示。

* 1.new Promise(fn) 返回一个promise对象

*  2.在fn 中指定异步等处理

    * 处理结果正常的话，调用resolve(处理结果值)

    * 处理结果错误的话，调用reject(Error对象)

### 发散
> 既然promise是为了解决异步后的回调使用的 那么其实所有用到回调的地方我们都可以使用promise的思想
```
function successTip(time,callback){
    //成功弹窗
    setTimeout(()=>{
        callback();
        }
    },time*1000)
}

successTip(3,function(){
    //跳到首页
})
```
> 使用promise
```
function successTip(time){
    return new Promise((resolve,reject)=>{
        //成功弹窗
        setTimeout(()=>{
            resolve();
        },time*1000)
    })
}

successTip(3).then(()=>{
    //跳到首页
})
```
