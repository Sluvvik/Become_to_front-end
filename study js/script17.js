const obj1 = {
	name: "Slava",
	age: 19
};
const obj2 = obj1;
console.log(obj1);
obj1.name = "NeSlava";
obj1.age = 21;

console.log(obj1);
console.log(obj2);

const groupA = [
	"FC Arsenal London",
	"FC Real Madrid",
	"FC Bayern Munich",
	"FC Milan"
];
/*
console.log('first method:')
function createTeamsForCalendarPage(teams) { // method 1 (forEach)
	teams.forEach((item, index) => {
		const onlyClubName = item.split(' ')[1];
		teams[index] = onlyClubName;
	});
	return teams;
};

const newArr = [...groupA];

console.log(createTeamsForCalendarPage(newArr));
console.log(groupA);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('second method:')
function createTeamsForCalendarPage2(teams) { // method 2 (map)
	return teams.map((item) => item.split(' ')[1]) };

const newArr2 = [...groupA];
console.log(createTeamsForCalendarPage2(groupA));
console.log(groupA);