console.log('You are at ' + window.location);

let myFunc = function (element, color, fsz) {
	element.style.color = color;
	element.style.fontSize = fsz;
}

const heading = document.querySelector('h1');
const p = document.querySelector('p');

myFunc(heading, 'blue', '30px');
myFunc(p, 'yello', '35px');