// Massive 
// ['orange', 'tomato', 'bananaana']
const fruits = ['orange', 'banana', 'cherry']
console.log(fruits)

const numbers = [19, 17, 18, 20, 23]
console.log(numbers)

let usersArray = [
	{name: 'Slava', age: 19 ,hobby: 'Dungeos & Dragons'},
	{name: 'Nikita', age: 19 ,hobby: 'Flower'}
]
console.log(usersArray)

const newFollower = true
if (newFollower) {
	usersArray.push({name: 'Nikita', age: 19 ,hobby: 'Flower'},{name: 'Giga-chad', age: 19 ,hobby: 'Flower'},{name: 'Natalia', age: 19 ,hobby: 'Flower'})
	console.log(usersArray)
}

usersArray.splice(0, 1, 'new item' )
console.log(usersArray[0])


// Homework

let sub = [1, 2, 3, 1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3]
function congratsIfMoreThan100(){
	return sub.length >= 100 ? alert('Congratulation, you have more 100 subscribers') : alert('You has ' + sub.length + 'subscribers')
}

const theBestNameItsSlava = true
theBestNameItsSlava ? congratsIfMoreThan100(sub) : alert("You don't belong here")