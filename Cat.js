var Mouse = require('./Mouse');
function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse){
		this.stomach.push(animal);
	} else {
		throw new Error('cat can only eat mouse');
	}
	
};

module.exports = Cat;