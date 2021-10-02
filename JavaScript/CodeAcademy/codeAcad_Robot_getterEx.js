/* Robot enery level by getter 

Getters are methods that get and return the internal properties of an object

advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand.
*/

robot = {
	_model: '1E456',
	_energyLeverl: 100,
	_get engergyLevel(){
		if(typeof this._energyLeverl === 'number') {
			return `'My current energy level is ${this._energyLeverl}`;
		} else {
			return `System malfunction: cannot retrieve energy level`;
		}	
	}
}

console.log(robot.engergyLevel);