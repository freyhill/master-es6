/**
 * @file: proxy
 * @author: leinov
 * @date: 202005
 */

// proxy 意为代理可以处理对象属性在读写时的一些操作
const person = {
    name: 'leinov',
    age: 18
}
const personProxy = new Proxy(person, {
    // get方法的两个参数
    // @target 目标对象
    // @property 被访问的对象上的属性
    get(target, property) {
        return target[property] ? target[property] : '没有 哈哈哈'
    },
    // set方法有三个参数
    // @target 被设置的对象
    // @property 被设置的对象上的属性
    // @value 设置属性的值
    set(target, property, value) {
        if (!(property in target)) {
            throw new Error('非法操作')
        }
        target[property] = value;
    }
});

console.log(personProxy.age);
console.log(personProxy.address);
personProxy.name = 'leinov2'
console.log(personProxy.name);
personProxy.address = 'beijing'