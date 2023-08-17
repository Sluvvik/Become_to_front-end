// const = [ 

function sayHello() {
	console.log('hello');
};

const sayHello2 = () => {
	console.log('hello 2')
};

sayHello2();

function sayHelloToPerson(name) {
	console.log("hello, " + name);
};


const summ = (a, b) => {
	return a + b;
};
console.log(summ(5, 100));


const summ2 = (a, b) => a + b;
console.log(summ2(5, 100))