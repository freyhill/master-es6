class Animal{

	constructor(){

		this.type = "aninmal"
	}

	say(say){
		console.log(this.type+" say " +say);
	}
}


let animal = new Animal();
animal.say(" hello");

class Cat extends Animal{
	
	constructor(){
		super();
		this.type = "cat";
	}


}


let cat  = new Cat();

cat.say("hello");