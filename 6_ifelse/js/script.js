console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if (answer < 18) {
	Image.style.backgroundImage = 'url("https://lh3.googleusercontent.com/proxy/amTlGHxejzZESte2wR5zhpE_sLAEaH5UPy8R5kJfshsr4a0JtPOgZ8BPsRpLB7fD2AaUjh8t5ReUFUiMq3gKjJx-L3APukx8yRpGVd5Fr9nPNNaLvVbkBP0Bzw")';
} else if (answer <= 25) {
	Image.style.backgroundImage = 'url("https://lh3.googleusercontent.com/proxy/q5Omp9BnEg-QvgZ1_s_bIZjrqczw5xOj4zewPlj2OxzulyzwTmlaeII8j6G_tF0lcrAx2vVh4Z-4Ugvn8P4JEBkkaBZZ_weU9xdW-liNAJU8sO1oDiilddNGBfkU8PadmAn4_sTSXBbAsO7xFmUzzrwgvapkA8g")';
} else if (answer <= 50) {
	Image.style.backgroundImage = 'url("https://media-cdn.tripadvisor.com/media/photo-s/19/26/ba/71/img-20190903-180541-largejpg.jpg")';
} else {
	Image.style.backgroundImage = 'url("https://www.esprit-rando.fr/wp-content/uploads/2014/11/img-accueil.jpg")';
};