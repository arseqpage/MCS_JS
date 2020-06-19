console.log('You are at ' + window.location);

function sayHi() {
	return 'Привет студент';

	// console.log('Привет студент');
}

document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Привет ' + name;
}

console.log(sayName('Арслан'));
console.log(sayName('Лёха'));