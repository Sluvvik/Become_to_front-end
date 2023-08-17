let sendButton = document.querySelector('.add-button');
let toDoTask = document.querySelector('.send-list');
let list = document.querySelector('.todo-list');


//if(toDoTask.test(content)){
sendButton.addEventListener('click',() => {
	const li = document.createElement('li'); 	//create teg li
	li.className = 'todo-list-item'	//add class of li
	const deleteButton = document.createElement('button');	//create teg buttonn

	deleteButton.innerText = '消去'; //add text for button
	li.innerText = toDoTask.value; // remove text for inputs

	list.appendChild(li);
	li.appendChild(deleteButton);
	toDoTask.value = ''

	//add act in deleteButton
	deleteButton.addEventListener('click', () => {
		list.removeChild(li, deleteButton)
	})
});
//};















console.log(sendButton);
console.log(list);
console.log('hello');