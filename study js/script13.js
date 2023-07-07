//Hoisting

//Homework 
/*
Написати функцію, яка приймає 2 аргументи: Масив чисел і Число.
Функція повертає к-ть повторюванності переданого числа в масиві.
Якщо даного числа там немає - функція повертає текст "Данного числа в массиві не має!"
*/

const numbersArray = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 99, 100, 777,1,1,1,1,1,1,1,1,1]
let repeat = 0
const length = numbersArray.length
function getRepetitionOfNumbers() {
	for (let i = 0;length > i; i++){
		let number = numbersArray[i]

		for (let i = 0;length >= i; i++){
			if (numbersArray[i] === number) {
				repeat ++
			}
			if (i === length && repeat >= 2) {
				console.log('Число ' + number + ' повторюється ' + repeat + ' разів')
				repeat = 0
			} else if (i === length && repeat < 2) {
				console.log('Число ' + number + ' не повторюється!')
				repeat = 0
			}
		}
	}
}

getRepetitionOfNumbers();