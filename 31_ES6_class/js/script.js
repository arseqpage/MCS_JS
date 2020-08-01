class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHi() {
        return 'Hello ' + this.name
    }
}

class Female extends User {
    sayHi() {
        return 'Привет, ' + this.name + ' ты зарегистрирована'
    }
}

const Man = new User('someone', '12@gkgk.ru', 'qqq111');
console.log(Man);
console.log(Man.sayHi());

const Anya = new Female('Anya', 'anya222@mail.ru', 'gogogog1222');
console.log(Anya);
console.log(Anya.sayHi());
