"use strict";

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class 创建一个类
 */

var Animal = function () {

	/**
  * @constructor 类的默认方法
  * @Use 当new一个类的实例时，自动调用该方法，每个类都必须有一个constructor方法，如果没有手动写，会有一个空的constructor方法默认被添加
  * @Notice constructor 中的this表示实例对象 也可以手动改为成其他对象
  */

	/**
  * @property
  * 类的实例属性
  */
	function Animal(obj) {
		(0, _classCallCheck3.default)(this, Animal);
		this.myProp = 30;

		this.obj = obj;
		this.liveWhere = this.liveWhere.bind(this); // 将this绑定到方法上
		console.log("i will execute when new a instance of a class ");
		console.log(this.myProp);
	}

	/*
  * @toString 类默认方法
  */


	/**
  * @static property
  * 类的静态属性
  */

	(0, _createClass3.default)(Animal, [{
		key: "toString",
		value: function toString() {
			return this.kinds + "\u7C7B\u4E2D\u7684" + this.name;
		}

		/**
   * @get
   */

	}, {
		key: "liveWhere",


		/**
   * 类方法
   * @Notice 定义类的方法时前面不要加function
   * @Notice 方法之间不要用逗号
  	 */
		value: function liveWhere(who) {
			console.log(who + " living in " + (this.obj.place ? this.obj.place : ""));
		}
	}, {
		key: "prop",
		get: function get() {
			return this.obj;
		}

		/**
   * @set
   */
		,
		set: function set(obj) {
			this.obj = obj;
		}

		/**
   * @Static Function 静态函数
   * @Use 类名可以直接调用 Animal.drump(2);
  	 */

	}], [{
		key: "whichAnimal",
		value: function whichAnimal() {
			return "this is a static function";
		}

		/**
   * @Static Function 静态函数
   * this指向的是类本身 而不是实例
   * 静态方法可被继承
  	 */

	}, {
		key: "staticFun",
		value: function staticFun() {

			//调用静态属性
			console.log(this.myStaticProp);
			//调用静态方法
			return this.whichAnimal();
		}
	}]);
	return Animal;
}();

/**
 * @instance 实例化一个类 cat
 */


Animal.myStaticProp = 30;
var cat = new Animal({ kinds: "鸟类", name: "蝴蝶", place: "亚洲" });

// 调用实例方法
cat.liveWhere("iam");

// 如果下面这样使用 shis指向会出错 解决方法是在constructor里bind this
var liveWhere = cat.liveWhere;

liveWhere("haha");
// 调用静态方法
console.log(Animal.whichAnimal());
// 测试静态方法中的this
console.log(Animal.staticFun());
// 调用初始化属性值
console.log(cat.obj.kinds);
// getter 获取属性
console.log("getter", cat.prop);
// setter 设置属性
cat.prop = 1111;
console.log("update setter", cat.prop);

/**
 * [类的继承]
 * @class
 * @extends
 */

var Dog = function (_Animal) {
	(0, _inherits3.default)(Dog, _Animal);

	function Dog() {
		(0, _classCallCheck3.default)(this, Dog);
		return (0, _possibleConstructorReturn3.default)(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).apply(this, arguments));
	}

	return Dog;
}(Animal);

console.log("继承", Dog.staticFun());