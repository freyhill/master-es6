
/**
 * --export与export default都可以导出常量、函数、文件、模块等
 * --可以在其他文件或者模块儿中使用import+常量、函数、文件、模块名的方式导入使用
 * --在一个文件或模块中，export、import可以有多个
 * --export default在一个文件或模块中只能有一个
 * --通过export方式导出，在import时要加{}
 * --通过export default则不需要{} 直接通过常量、函数、文件、模块名引入
 */

/****** 
 * 引入 export default 导出的文件
 * 引入名可以是自定义的，也可以是导出名，
 * 不能带大括号 
 */

import x from './export-default';
import exFun from './export-default';
console.log(x); //导出字符串
//exFun();
//x.name(1); //class



/********************
 * 引入 export 导出的文件
 ********************/
//第一种方式 通过{}将需要导出的变量，函数包起来
import {GET_USER_DATA,getData,name} from './export.js'
console.log("import export",GET_USER_DATA)
console.log("import export",getData());
console.log("name",name);

// 第二种方式 通过属性符号名导入整个模块儿 与第一种效果相同
import * as getdata from './export.js'
console.log("import * as getdata from './export.js'",getdata.GET_USER_DATA);
console.log("import * as getdata from './export.js'",getdata.getData());
console.log(getdata.name);
console.log(getdata);
// 引入export 重命名的函数
import {waf} from './export.js'
console.log("as",waf());