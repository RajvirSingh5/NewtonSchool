class Dog {
	constructor (name) {
		this._name = name;
		this._behaviour = 0;
	}
	
	get name() {
		return this._name;
		}
	get behaviour() {
		return this._behaviour;
	}
	
	incrementBehaviour() {
		this._behaviour ++;
	}
}

