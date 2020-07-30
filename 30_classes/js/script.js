let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi: function () { return 'Hello' }
}

function User(name, email, password) {
    // Конструктор

    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ = Users;


}

const Fedya = new User('Федя', 'kek@mail.com', 'qweqwe123');

console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
    // Конструктор

    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ = Users;
    this.sayHi = function () { return 'Привет! ' + this.name + ' Ты зарегистрирована' }


}

const Alla = new FUser('Алла', 'alla@gmail.tu', 'sdsdsd1');
console.log(Alla);
console.log(Alla.sayHi());