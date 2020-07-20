{
    function fn(x){
        return function(y){
            console.log(x*y);
        }
    }
    fn(2)(6);//12
}

{   // 一个函数作为另一个函数的参数
    function fn(x,y,abs){
        return abs(x)+abs(y);
    }
    const num = fn(-5,-9,Math.abs);
    console.log(num); //14
}

{
    // map 由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果：
    
    function pow(x) {
        return x * x;
    }
    const arr = [1,2,3];
    const newArr = arr.map(pow);
    console.log(arr); // [1,2,3]
    console.log(newArr); // [1,4,9]

    const newArr2 = arr.map(String);
    console.log(newArr2); // [ '1', '2', '3' ]
}

{
    // reduce 再看reduce的用法。Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：

    const arr = [1,2,3,4,5,6];
    const newArr = arr.reduce((x, y) => {
        //return x*y; // 720
        //return x*10+y; // 123456;
        return x + y; // 21
    })
    console.log(newArr);
}

{   // 测试
    const names = ["leinov","sfse","xd"];
    const newNames = names.map((item)=>{
        const newItem =  item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
        return newItem;
    })
    console.log(newNames); //[ 'Leinov', 'Sfse', 'Xd' ]
}

{
    // filter filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
    const arr = [{name:"leinov",age:18},{name:"xx",age:3},{name:"yy",age:20}];
    const newArr =  arr.filter((item)=>{
        return item.age>=20;
    })
    console.log(newArr); //[ { name: 'yy', age: 20 } ]
}

{
    // fileter 去重 重要 去除重复元素依靠的是indexOf总是返回第一个元素的位置
    const arr = [1,2,3,4,4,3,2,8];
    const newArr = arr.filter((item,index,self)=>{
        console.log(self.indexOf(item),index ,item);
        return self.indexOf(item) === index;
    })
    console.log(newArr); //[ 1, 2, 3, 4, 8 ]
}

{
    // sort 排序
    const arr = [1,10,23,5,4,8];
    const sortArr = arr.sort((x,y)=>{
        if(x < y){
            return -1
        }else if(x === y){
            return 0;
        }else{
            return 1;
        }
    })
    console.log(sortArr); //[ 1, 4, 5, 8, 10, 23 ]
}
{
    // sort 字母排序
    const arr = ["Apple","alibaba","tencent","netEasy","google"];
    const newArr = arr.sort((s1,s2)=>{
        const s1Up = s1.toUpperCase();
        const s2Up = s2.toUpperCase();
        if(s1<s2){
            return -1
        }else if(s1>s2){
            return 1
        }else{
            return 0;
        }
    })
    console.log(newArr); //[ 'Apple', 'alibaba', 'google', 'netEasy', 'tencent' ]
}
{
    // forEach 就是普通循环 参数 item，index，self
    const arr = [1,2,3,4]; // 空的不会被遍历 [1,2,,3]
    arr.forEach((item,index)=>{
        console.log(item*index);//0 2 6 12
    })
    arr.forEach(console.log) 
    // 1 0 [ 1, 2, 3, 4 ]
    // 2 1 [ 1, 2, 3, 4 ]
    // 3 2 [ 1, 2, 3, 4 ]
    // 4 3 [ 1, 2, 3, 4 ]
    
}
{   // every 此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回true，否则为false：
    const arr = [1,2,3,4];
    const isOk = arr.every((item)=>{
        return item<0;
    })
    console.log("isOk",isOk); // false
}
{
    // some 此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回true
    const arr = ["leinov","dx","xdx","jobs"];
    const hasJobs = function(item){
        return item === "jobs";
    }
    const isOk = arr.some(hasJobs);
    console.log("hasJobs",isOk); //true
}