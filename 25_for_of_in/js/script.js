console.log('You are at ' + window.location);


const buttons = document.querySelectorAll('button');

for (button of buttons) {
    console.log(button);

    button.style.backgroundColor = 'lightblue';
}

// for (key in buttons) {
//     buttons[key].style.backgroundColor = 'lightblue';

// }

let person = {
    name: 'Alex',
    surname: 'Kekerov',
    student: true
}

for (key in person) {
    console.log(key);

}