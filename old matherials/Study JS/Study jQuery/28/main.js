jQuery(function($){
	"use strict";

	//alert("Hello world");

	var button = $('#button') , button_id = button.attr("id");
	var navka = $('#navka');
	var bata = $('#bata');
	var bubka = $('#button_leave');

	button.on('click',function(){//click
		alert("Нажата кнопка у которой id= " + button_id);
	});

	navka.on('mouseenter',function(){ //mouseenter
		alert("AHHAHAHAHAHHAHAH");
	});

	bata.on('dblclick',function(){
		alert("Hi sexy man");
	});

	bubka.on('mouseleave',function(){
		alert("Куда ушел ??????");
	});

	var ula = $('ul');

	ula.on('click','li',function(){
		alert("Была  нажата лишка с айдишником " + $(this).attr('class'));
	});



});