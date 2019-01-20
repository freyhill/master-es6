/**
 * @file 数组方法
 * @author leinov
 * @date 2019-1-19
 */

 // push 在数组尾部添加项
 {
    var arr = ["a","b"];
    var count = arr.push("c");
    console.info(count); // 3 切记返回的是长度
    console.table(arr); // ["a","b","c"]
 }

 // pop 在数组的头部添加 unshift
 {
     var arr = ["s","k"];
     var count = arr.unshift("m");
     console.info(count); // 3
     console.table(arr); // ["m","s","k"]
 }

 // pop 在数组尾部删除项
 {
     var arr = ["x","y","z"];
     var item = arr.pop();
     console.info(item);  // "z"
     console.table(arr); // ["x","y"]
 }

 // shift 在数组头部删除项
 {
    var arr = ["m","n","q"];
    var item = arr.shift();
    console.info(item);  // "m"
    console.table(arr); // ["n","q"]
}

// reverse 翻转数组
{
    var arr = ["x",1,"b","dd"];
    arr.reverse();
    console.table(arr); // ["dd","b",1,"x"]
}

// sort 排序
{
    var arr = [23,1,2,6,3];
    newArr = arr.sort((value1,value2)=>{
        if(value1<value2){
            return -1
        }else if(value1>value2){
            return 1
        }else{
            return 0;
        }
    });
    console.table(newArr);
}

// concat 拼接数组
{
    var arr = [1,2,3];
    var arr2 = arr.concat(4,[5,6]);
    console.table(arr); // [1,2,3]
    console.table(arr2); // [1,2,3,4,5,6]
}

// slice 截取数组，可以是一个参数(截到最后一位),两个参数(从开始下标截到结束下标之间的项，但不包含结束项) 不会影响原有数组长度
{
    var arr = [1,2,3,4,5];
    var newArr = arr.slice(3) 
    var newArr2 = arr.slice(1,3);
    console.log(arr); //[1,2,3,4,5]  不会影响原来数组长度
    console.log(newArr); // [4,5]
    console.log(newArr2); // [2,3] //不包含结束项
}

// splice 数组的删除，插入，替换 
{
    // 删除
    var company = ["google","airbnb","hulu","alibaba","tencent"];
    var removed = company.splice(2,2);
    console.log(company); // ["google", "airbnb", "tencent"]
    console.log(removed); // ["hulu", "alibaba"]

    // 删除
    company.splice(0,0,"jd","baidu");// ["jd", "baidu", "google", "airbnb", "tencent"] 从第0项开始，删除0项，添加两项
    console.log(company);

    // 替换
    company.splice(1,2,"hulu","alibaba");
    console.log(company); // ["jd", "hulu", "alibaba", "airbnb", "tencent"] 从第一项开始删除2项 再添加两项
}

// indexOf & lastIndexOf 数组的位置
{
    var arr = [1,22,3,55,2,1,6,55];
    var index = arr.indexOf(55);
    var lastIndex = arr.lastIndexOf(55);
    console.log(index); // 3
    console.log(lastIndex);// 7

    var index2 = arr.indexOf(55,4);
    console.log(index2); //7  查找55 从小标4位置开始
    var lastIndex2 = arr.lastIndexOf(1,7);
    console.log(lastIndex2); // 5 反方向
}

// every迭代，没相符合则返回true
{   
    var ha = [1,2,3,4]

    var arr = [{city:"beijing",count:2000},{city:"xi'an",count:800},{city:"chengdu",count:1500},{city:"wuhan",count:1200}];
    // 
    var isbig= arr.every((item,index,arr)=>{
        return item.count>1000;
    })
    console.log(isbig); // false
}

// filter 返回true的组成新数组
{
    var arr = [{city:"beijing",count:2000},{city:"xi'an",count:800},{city:"chengdu",count:1500},{city:"wuhan",count:1200}];
    var newArr = arr.filter((item,index,arr)=>{
        return item.count>1000;
    })
    console.table(newArr); // ["beijing","chengdu","wuhan"]
    console.table(arr); // 原数组
}

// forEach 对每项运行函数，没有返回值
{
   var arr = [1,2,3,4];
   var newArr = arr.forEach((item,index,arr)=>{
    console.log(item*2); // 2,4,6,8
   }) 
}

// map 对每项执行函数并返回新数组
{
    var arr = [1,2,3,4];
    var newArr = arr.map((item,index,arr)=>{
        return item*2;
    }) 
    console.log(arr); // [1, 2, 3, 4]
    console.log(newArr); // [2, 4, 6, 8]
}

// some 对数组运行函数，只要有一项返回true 则返回true 跟every正好相反
{
    var  arr =[600,300,2,50,8,40];
    var isBig = arr.some((item,index,arr)=>{
        return item>500
    })
    console.log(isBig); // true
}

// reduce 叠加
{
    var arr = [1,2,3,4,5];
    var sum = arr.reduce((pre,cur,index,arry)=>{
        return pre + cur;
    })
    console.log(sum);
}