/**
 * @class 创建一个类
 */

class Animal {
	/**
	 * @constructor 类的默认方法
	 * @Use 当new一个类的实例时，自动调用该方法，每个类都必须有一个constructor方法，如果没有手动写，会有一个空的constructor方法默认被添加
	 * @Notice constructor 中的this表示实例对象 也可以手动改为成其他对象
	 */
	constructor(obj) {
		this.obj = obj;
		this.kinds = obj.kinds ? obj.kinds : ''
		this.name = obj.name ? obj.name : '';
		this.place = obj.place ? obj.place : '';
		console.log("i will execute when new a instance of a class ");
	}

	/*
	 * @toString 类默认方法
	 */
	toString() {
		return (`${this.kinds}类中的${this.name}`);
	}

	get prop() {
		return this.obj;
	}

	set prop(obj) {
		this.obj = obj;
	}
	/**
	 * @Static Function 静态方法
	 * @Use 类名可以直接调用静态方法 Animal.drump(2);
	 * @difference 实例方法则需要类的实例对象才可以调用
 	 */
	
	static whichAnimal() {
		return "this is a static function";
	}

	/**
	 * @Static Function 静态函数
	 * this指向的是类本身 而不是实例
	 * 静态方法可被继承
 	 */
	static staticFun() {

		//调用静态属性
		console.log(this.name);
		//调用静态方法
		return this.whichAnimal();
	}

	/**
	 * 实例方法
	 * @Notice 实例方法前面不要加function
	 * @Notice 方法之间不要用逗号
 	 */
	baseInfo() {
		return this.name + ' live in ' + this.place;
	}

	static createIns(info){
		return new Animal(info);
	}
}

/**
 * @instance 实例化一个类 cat
 */
const cat = new Animal({ kinds: "鸟类", name: "麻雀", place: "亚洲" });

// 调用实例方法
const baseInfo = cat.baseInfo();
console.log(baseInfo);

// 调用静态方法
console.log(Animal.whichAnimal());
// 测试静态方法中的this
console.log('静态方法中的this:',Animal.staticFun());
// 调用初始化属性值
console.log(cat.obj.kinds);
// getter 获取属性
console.log("getter", cat.prop);
// setter 设置属性
cat.prop = {kinds: '猫科'};
console.log("update setter", cat.prop);


const maque = Animal.createIns({kinds: 'bird', name: 'maque', place: 'china'});
console.log(maque.name);


/**
 * [类的继承]
 * @class
 * @extends
 */
class Dog extends Animal {
	constructor(obj){
		super(obj)
	}
	sayWang() {
		console.log(super.baseInfo());
		console.log('i can wang')
	}
}
console.log("继承", Dog.staticFun());
const afu = new Dog({kinds: 'jinmao', name: 'afu', place: 'china'})
afu.sayWang();