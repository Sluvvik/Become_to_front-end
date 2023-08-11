//Методи масивів filter/map/reduce та інші
const users = [
  {
    name: 'Slava',
    age: 19,
    sex: 'male'
  },
  {
    name: 'Polina',
    age: 20,
    sex: 'female'
  },
  {
    name: 'Nikita',
    age: 19,
    sex: 'male'
  },
  {
    name: 'Denis',
    age: 17,
    sex: 'male'
  },
  {
    name: 'Zlata',
    age: 19,
    sex: 'female'
  }
];




//+ .find
const foundObj = users.find(function(item){
	return item.name = 'Polina'
});
console.log(foundObj)
//-

























/*
const filterAge = users.filter(function(item){
	return item.sex === 'male'
});
console.log(filterAge);
*/














//+ Learn .reduce
const summ = users.reduce(function(accumulator, currentValue){return accumulator + currentValue.age;},0);
console.log(summ)
console.log("summ")
//-


















//+ Learn method forEach
users.forEach(function(item, index) {
	return index === 0 ? index++ : console.log(item) + console.log(index)
});
//-

//+ remember method array unshift
users.unshift({name: 'Giga-chad', age: 19 ,sex: 'male'});
console.log(users)
//-





// Learn filter +
let counter = {
	men: 0,
	women: 0
};

let adultsUsers = users.filter(function (item){
	return item.age >= 18 ;
});
adultsUsers.pop(); // just remeber pop
console.log(adultsUsers);
//-
console.log(summ)
console.log("summ")




//.forEach
/*
users.forEach(function(item){
	item.sex === 'male' ? counter.men++ : counter.women++
})
console.log(counter)
*/










/*---NOTES
Data structure - massive and objects
newMethodsForMe :
- .forEach(function(){});

NOTES---*/