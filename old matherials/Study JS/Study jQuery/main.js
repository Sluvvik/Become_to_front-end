jQuery (function($){
	"use strict";
	alert("Hello world");
	$('p').css({'background-color':'black','border':'3px dashed blue'})	.hide(2000);

	$('.class');

	$('p');

	$('#id , .class , p');

	$('p:first , p:last , p:odd , p:even');

	$('a[href]');
// а можно ещё и так , типа если надо обобщенно из всех атрибьютов взять все то можно так :
	$('[title=test]');

	$('input[type="checkbox"]');// или можно для сокращения использовать такой вариант :
	$(':checkbox');

	$('p:eq(3)');// ну тут как и во всех языках исчисление начинается с 0, и я выбрал элемент 3, но в списке он будет 4 по факту 
	$('p:gt(3)'); // gravelt это тот элмент который будет брать всё то что больше заданного значения (3) тоесть всё что больше3 , а то что меньше - то параша полная 
	$('p:lt(3)'); // las  по факту противоположность прошлому знанию gt , и оно выберет всё что меньше заданного значения 

	$('div:empty'); //тут я изучаю емпти , оно выберет все пустые элементы , например пучтые дивы в которых ничего нету
	$('div:not(empty)'); //тут уже используется логическая свзка NOT к EMPTY чтобы взять все не пустые дивы 

	$('p:contains("Hello")');// оно всё выберет со словом Хелло , за это отвечает CONTAINS

	$('div:has(p)'); // я выбрал все дивы которые имеют абзацы и за это отвечает ХЕС HAS , что в прееде ознаечает имеет

});