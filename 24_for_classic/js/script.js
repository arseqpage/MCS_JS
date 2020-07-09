console.log('You are at ' + window.location);

// const divs = document.querySelectorAll('div');
// console.log(divs);

// for (let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundImage = 'linear-gradient(' + (45 + i * 30) + 'deg, red, blue)'
// }

// for (let i = 1; i <= 100000; i++) {
//     if (i % 6 == 0) { document.querySelector('.out').innerHTML += i + ' ' }
// }

for (let i = 0; i <= 100000; i = i + 6) {
    document.querySelector('.out').innerHTML += i + ' ';
}