

/**
 * call 方法
 *
 * @param {*} content
 */
function say(content) { 
    console.log(`${this} is ${content}`); 
} 
say("Leinov") // window is good
say.call("Leinov", "good"); // Leinov is good

// 函数的this永远指向离他最近的调用他的对象
var x = "outer";
var obj = {
    x:"objx",
    info:{
        x:"infox",
        data:{
            x:"datax",
            fn:function(){
                console.log(this.x);
            }
        }
    }
}

var obj2 = {
    x:"obj2x"
}
obj.info.data.fn();//datax
obj.info.data.fn.call(obj) //objx
obj.info.data.fn.call(obj.info) // infox
obj.info.data.fn.apply(obj2); //obj2x

// call apply为函数指定调用时的上下文
function getName(){
    console.log(this.x); 
}
getName();//undefined 因为这里用的webpack大包 所以 x =outer并没有挂倒window下
getName.call(obj.info); //infox


const arr = [1,2,3,4];
function showIt(a,b,c){
    console.log(this.name,a,b,c);
}
obj3 = {
    name:"leinov"
}
// call 和apply用法相同，只是apply第二个参数可以传数组
showIt.call(obj3,arr[0],arr[1],arr[2]);
showIt.apply(obj3,arr)

// bind 必须手动调用
var obj4 ={
    name : "Leinov",
    fn : function (a,b) {
        console.log( a + b)
    }
}
function bIt(text){
    console.log(this.name,text);
}
 
bIt.bind(obj4,"hahah")()  //必须执行下

