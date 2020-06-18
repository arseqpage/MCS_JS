console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

(answer >= 18) ? Image.style.backgroundImage = 'url("https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")' : Image.style.backgroundImage = 'url("https://ichef.bbci.co.uk/news/720/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg")';

// if (answer < 18) {
// 	Image.style.backgroundImage = ';
// } else if (answer <= 25) {
// 	Image.style.backgroundImage = ;
// } else if (answer <= 50) {
// 	Image.style.backgroundImage = 'url("https://media-cdn.tripadvisor.com/media/photo-s/19/26/ba/71/img-20190903-180541-largejpg.jpg")';
// } else {
// 	Image.style.backgroundImage = 'url("https://www.esprit-rando.fr/wp-content/uploads/2014/11/img-accueil.jpg")';
// };