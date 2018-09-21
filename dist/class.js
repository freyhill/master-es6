"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
		_classCallCheck(this, Animal);

		this.obj = obj;
		console.log("i will execute when new a instance of a class ");
	}

	/*
  * @toString 类默认方法
  */


	_createClass(Animal, [{
		key: "toString",
		value: function toString() {
			return this.kinds + "\u7C7B\u4E2D\u7684" + this.name;
		}

		/**
   * @Static Function 静态函数
   * @Use 类名可以直接调用 Animal.drump(2);
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

// 调用静态方法
console.log(Animal.whichAnimal());