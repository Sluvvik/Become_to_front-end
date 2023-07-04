const subs = [
{name: 'Slava', yourBestFriend: true},
{name: 'Nikita', yourBestFriend: false},
{name: 'Alice', yourBestFriend: true},
{name: 'Bob', yourBestFriend: false},
{name: 'Charlie', yourBestFriend: false},
{name: 'David', yourBestFriend: true},
{name: 'Frank', yourBestFriend: false},
{name: 'Grace', yourBestFriend: false},
{name: 'Henry', yourBestFriend: true},
{name: 'Isabella', yourBestFriend: false},
{name: 'Jack', yourBestFriend: false},
{name: 'Katherine', yourBestFriend: false},
{name: 'Liam', yourBestFriend: true},
{name: 'Mia', yourBestFriend: false},
{name: 'Nathan', yourBestFriend: true}
]

for(let i = 0; i < subs.length; i++){
	console.log(subs[i])
}


/* Loops
for
for of 
for in
while 
do while
*/

// Homework

const numbers = [1,2,3,4,5,6,7,8,9]
function squareArr(){
	for (let i = 0; numbers.length > i; i++ ) {
		console.log(numbers[i] * numbers[i])
	}
	return numbers
}

const theBestNameItsSlava = true
console.log(squareArr())

