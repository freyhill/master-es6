

function addAdrees (target) {
    target.prototype.getName = () => {
        return this.name;
    }
}
@addAdrees
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
    getName() {
        return 'my name is ' + this.name
    }
}

let p1 = new Person('daliang');
console.log(p1.getName());