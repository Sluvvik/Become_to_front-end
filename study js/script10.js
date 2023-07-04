let people = [
	{
		name: 'Peter',
		sex: 'male'	
	},
	{
		name: 'Slava',
		sex: 'male'	
	},
	{
		name: 'Jon',
		sex: 'male'	
	},
	{
		name: 'Sara',
		sex: 'female'	
	},
	{
		name: 'Monika',
		sex: 'female'	
	},
	{
		name: 'Anjela',
		sex: 'female'	
	}
]
function addAdjective(){
	for (let i = 0; people.length > i; i++){
		if (people[i]['sex'] === 'male') {
			people[i]['adjective'] = 'handsome'
		} else {
			people[i]['adjective'] = 'beautiful'
		}
		//console.log(people[i])
	}
	return console.log(people)
}
 addAdjective()