
/**
 * export 可以导出多个变量，函数
 * 书写方式多样
 */

// 直接export变量
export const GET_USER_DATA = 'GET_USER_DATA';
export function getData(){
    return {name: "leinov", age: 18}
}

// export一个由大括号包起来一组变量
const name = "leinov";
const age = 18;
const add = "beijing"
export {name,age,add}

// 导出重命名
function whatAlongFunction(){
    return {isok:true}
}

export {whatAlongFunction as waf } // 注意as左右的顺序
    
//注意 
// 1.export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// export 1 这样是报错的 因为没有对外的接口变量
export const m = 1; //应该有对应的变量名
// 或者
const state = 1;
export {state}; //定义了对外接口state
// 2. 不能放在函数中
