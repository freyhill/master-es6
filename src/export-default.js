
/**
 * es6 中的模块儿 export default
 * export关键字必须在顶层 不能在局部
 * 一个文件只能有一个export default
 * 基本上可以导出任何想要导出的变量，函数，表达式等
 */
function exportFun(){
    console.log("export default","func");
}

export default exportFun;
//export default 'abc'; //ok
//export default 5 * 7; //ok
//export default { no: false, yes: true }; // ok

/**
 * 导出一个匿名class 
 *
 * @export
 * @class
 */
// export default class{
//     constructor(){

//     }
//     static name(params) {
//         console.log(params);
//     }
// }


/**
 * 导出一个匿名函数
 *
 * @export
 */
// export default function(){
//     console.log("a func ");
// }

/**
 * 导出一个值
 */
//export default 8;