"use strict";

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
	function Animal(obj) {
		(0, _classCallCheck3.default)(this, Animal);

		this.obj = obj;
		this.liveWhere = this.liveWhere.bind(this); // 将this绑定到方法上
		console.log("i will execute when new a instance of a class ");
	}

	/*
  * @toString 类默认方法
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
	}]);
	return Animal;
}();

/**
 * @instance 实例化一个类 cat
 */


var cat = new Animal({ kinds: "鸟类", name: "蝴蝶", place: "亚洲" });

// 调用实例方法
cat.liveWhere("iam");

// 如果下面这样使用 shis指向会出错 解决方法是在constructor里bind this
var liveWhere = cat.liveWhere;

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