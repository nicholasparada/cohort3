//Exercise 111
// Make an keyless car

var age = prompt("What is your age?");

if (Number(age) < 16) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 16) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 16) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 16) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 16) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 16) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 16) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 16) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 16) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

