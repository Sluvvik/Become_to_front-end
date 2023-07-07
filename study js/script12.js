const firstName = 'Slava'

function sayHello() {
	const lastName = 'Linevych'

	return function() {
		console.log(firstName)
		console.log(lastName)
	}
}