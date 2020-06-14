// document.body.innerHTML = prompt('Enter you code here...')

// let url = prompt('Enter URL');
// location = url;

//-----------------------

const totalCash = parseInt(prompt('Сумма наличных'));

const watchesCount = parseInt(prompt('Количество золотых часов'));
const earingsCount = parseInt(prompt('Количество сережек с бриллиантами'));

const watchesSum = parseInt(prompt('Цена за одну сережку')) * watchesCount;
const earingSum = parseInt(prompt('Цена за одну сережку')) * earingsCount;

const summWatchEaring = watchesSum + earingSum;

console.log(totalCash >= summWatchEaring);


//-------------------------

let admin;
let name;
name = 'John';
admin = name;
alert(admin);