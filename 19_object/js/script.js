console.log('You are at ' + window.location);

let person = {
    name: "Arseq",
    surname: "Zhazykpaev",
    age: 23,
    teacher: false,
    sayHello: function () { return 'Hello ' + this.name }
}

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.age = 22;
console.log(person);
console.log(person['surname']);

