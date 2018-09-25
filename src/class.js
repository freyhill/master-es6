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
		this.liveWhere = this.liveWhere.bind(this); // 将this绑定到方法上
		console.log("i will execute when new a instance of a class ");
	}

	/*
	 * @toString 类默认方法
	 */
	toString() {
		return (`${this.kinds}类中的${this.name}`);
	}

	/**
	 * @get
	 */
	get prop() {
		return this.obj;
	}

	/**
	 * @set
	 */
	set prop(obj) {
		this.obj = obj;
	}

	/**
	 * @Static Function 静态函数
	 * @Use 类名可以直接调用 Animal.drump(2);
 	 */
	static whichAnimal() {
		return "this is a static function";
	}

	/**
	 * 类方法
	 * @Notice 定义类的方法时前面不要加function
	 * @Notice 方法之间不要用逗号
 	 */
	liveWhere(who) {
		console.log(`${who} living in ${this.obj.place ? this.obj.place : ""}`);
	}
}

/**
 * @instance 实例化一个类 cat
 */
const cat = new Animal({ kinds: "鸟类", name: "蝴蝶", place: "亚洲" });

// 调用实例方法
cat.liveWhere("iam");

// 如果下面这样使用 shis指向会出错 解决方法是在constructor里bind this
const { liveWhere } = cat;
liveWhere("haha");
// 调用静态方法
console.log(Animal.whichAnimal());
// 调用初始化属性值
console.log(cat.obj.kinds);
// getter 获取属性
console.log("getter", cat.prop);
// setter 设置属性
cat.prop = 1111;

console.log("update setter", cat.prop);
