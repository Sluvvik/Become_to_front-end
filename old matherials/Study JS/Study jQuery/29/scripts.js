jQuery (function($){
 "use strict";
 	console.time();
 	var bab1 = $('#babka') , bab2 = $('#babka1') , bab3 = $('#babka2') ;

 	bab1.on ('click' , function () {
 		console.log("You click one ");
 	});

 	bab2.on ('click' , function () {
 		console.log("You click one ");
 	});

 	bab3.on ('click' , function () {
 		console.log("You click one ");
 	});

 	var name = "Slava" , first = {name: "Slava" , surname: "Linevych"} , number = 7 ;

 	console.log (name,first.surname,number);
 	console.timeEnd();

});