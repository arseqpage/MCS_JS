console.log('You are at ' + window.location);

// const cools = document.getElementsByClassName('cool');
// const cools = document.getElementsByTagName('div');
// const cools = document.querySelectorAll('.cool');
// console.log(cools[0]);
// cools[0].innerHTML = 'Hi im text im cool one'

let people = ['Vasya', 'Petya', 'Sasha'];
console.log(people);

console.log(people[0]);

people[0] = 'Yura';
console.log(people[0]);
console.log(people);

console.log(people.length);

let bigArray = [
    [1, 2, 3],
    [true, false],
    ['a', 'b', 'c']
]

console.log(bigArray[0][1]);
let bigObject = {
    names: ['Ars', 'Dima', 'Vitaly'],
    grades: [
        {
            intern: 1,
            junior: 2
        },
        {
            middle: 3,
            senior: 2
        }

    ]
}

console.log(bigObject.names[0]);

console.log(bigObject.grades[1].middle);