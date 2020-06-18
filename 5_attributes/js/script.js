console.log('You are at ' + window.location);

const image = document.querySelector('img');


console.log(image.hasAttribute('alt'));
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));

console.log(image.getAttribute('src'));
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Yandex_logo_ru.svg/1200px-Yandex_logo_ru.svg.png');
console.log(image.getAttribute('src'));

