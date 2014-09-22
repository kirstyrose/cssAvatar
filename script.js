(function(){

	"use strict";

	var eyesOpenInterval = 3500,
		eyesShutInterval = 250,
		delay = eyesOpenInterval;

	var blink = function() {

		toggleClass();
		randomize();

		var number = Math.floor((Math.random() * 10) + 1);

		console.log(number);

		// variable = (condition)
		// 		? value if true
		//		: value if false;

		delay = (delay == eyesOpenInterval) 
			? eyesShutInterval 
			: eyesOpenInterval;

		setTimeout(blink, delay);
	}

	var toggleClass = function() {

		$(".eye-rhs, .eye-lhs").toggleClass("blink");

	};

	var randomize = function() {

		

	};
	
	var init = function(){

		blink();

	}

	window.onLoad = init();


})();

// function fn() {
// 	// normal scope

// 	var a = [
// 		// list scope
// 		0, 1, 2
// 	];

// 	var b = {
// 		// object scope
// 		name: 'kirsty',
// 		test: function() {
// 			// function scop
// 		}
// 	};

// 	var fn = function() {

// 	};
// }