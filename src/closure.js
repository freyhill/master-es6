/** 
 * 闭包 
 */

var name = "Window";
var object = {
    name: "Leinov",
    getNameFunc: function () {
        return function () {
           console.log(this);//window
            return this.name;
        };
    }
};


console.log(object.getNameFunc()()); //window


// 作用域
var value = 1;
function foo(){
    console.log(value);
}
function far(){
    var value = 2;
    console.log(value);
    foo();
}
far(); // 1

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();// local scope

var scope2 = "global scope";
function checkscope2(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope2()(); //local scope