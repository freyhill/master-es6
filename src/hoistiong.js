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
    
    console.log(a,b); // b is not defined let 也提升 但需要在使用之前声明
    var b = 2;
    console.log(plus());
}