/**
 * @subject : 字符串扩展方法
 * @author : leinov
 * @date : 2020-05
 */

const {log} = console;
const msg = 'SyntaxError: Unexpected token.'
/**
 * [1.includes]
 */
log(msg.includes('Unexpected')); // true

/**
 * [2.startWith]
 */
log(msg.startsWith('start')); // false

/**
 * [3.endWith]
 */
log(msg.endsWith('.')); // true

const title = 'cool'
/**
 * [4.repeat]
 */
log(title.repeat(4)); // coolcoolcoolcool
