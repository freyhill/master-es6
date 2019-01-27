// 变量提升只是声明提升，初始化赋值是不会提升的，如果赋值位置在使用位置之后，则还是获取不到变量值
{
    var a = 1;
    var b = 2;
    function plus(){
        return a+b;
    }
    console.log(plus());// 3
}
{   
    console.log(plus()); // 3
    var a = 1;
    var b = 2;
    function plus(){
        return a+b;
    }
}

{   
    
    var a = 1;
    console.log("xxx",a,b); // b is not defined let 也提升 但需要在使用之前声明
    var b = 2;
    
}
{
    var a = 1;
    function a(){
        return "str";
    }

    a(); // 报错 因为a()提升到顶部，a=1在后面 所以a是一个变量 不能执行 
}
{   
    console.log(sum(1,2)); // 报错 sum is not a function 因为声明提升还未赋值 sum 
    console.log(sum); // undefined
    var sum = function(n1,n2){
        return n1+n2;
    }
}