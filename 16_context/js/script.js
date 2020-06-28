// console.log(this);


// window.onscroll = function () {
//     console.log(this);
// }

const button = document.querySelector('button');

// button.onclick = function () {
//     this.innerHTML = 'You clicked'
// }

button.onclick = () => {
    console.log(this);
    this.innerHTML = 'You clicked'
}