

function addInfo (add) {
    return function(target) {
        target.address = add;
    }
}
function school(target) {
    target.school = 'ufe'
}

function readOnly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor
}

@school
@addInfo('beijing')
class Person {
    _name = '';
    get name () {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    constructor(name) {
        this._name = name;
    }

    @readOnly
    getInfo() {
        return 'my name is ' + this.name
    }
}

let p1 = new Person('daliang');
p1.getInfo = function() {
    return 'haha'
}
console.log(Person.address, Person.school, p1.getInfo());


// 修改类方法
function addProps(props) {
    return function(target) {
        let old = target.prototype.render;
        console.log(old);
        target.prototype.render = function() {
            let oldProps = old.apply(this, arguments)
            props = {...oldProps, ...props}
            for(let item in props) {
                if (item === 'name') {
                    props[item] = `${this.title }-${props[item]}`
                }
            }
            return props;
        }
        return target;
    }
}
// 新增类属性
function setName(title) {
    return function(target) {
        target.prototype.title = title;
        return target;
    }
}

@setName('frontend')
@addProps({
    name: 'leinov',
    age: 18
})
class Component{
    constructor(props) {
        this.props = props;
    }
    render() {
        return this.props;
    }
}

let c = new Component({add: 'beijing'});
console.log(c, c.render());