// Functions
// call functions
// Dont Repeat Yourself
sayHello('Sluvvvviiik');

let userName = 'Slava'
function enterUserName() {
	return console.log(userName.toUpperCase() )
} 
enterUserName()


//////////////////////////////////////////////////////////////
// funcion + дія(){} 
function sayHello(name){
	const theBestName = 'Slava'
	return	console.log('Hello awrynian and ' + name	) // Declaration function 
}
sayHello('Sluvvvviiik');
//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
const sayHello5 = function(name) {
	alert('Hello awrynian and ' + name	) // Expression function
}

//////////////////////////////////////////////////////////////

const car = {
	speed: 100,
	color: 'green',
	drive: function() {
		return console.log('Idrive very fast!') //New method use/call function
	}
}

car.drive()