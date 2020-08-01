class Tiger {
    constructor(name) {
        this.name = name;
    }
    feedCat() {
        return 'Purrrrr'
    }
}

class angryTiger extends Tiger {
    throwDart() {
        return 'ZzZzZzZzZz'
    }
}

const Alex = new Tiger('Alex');
const Melman = new angryTiger('Melman');

console.log(Alex.feedCat());

console.log(Melman);
console.log(Melman.throwDart());


