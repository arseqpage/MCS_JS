
let city = '';
let out = '';
let wind = '';
function weatherApi() {
    const APIKey = '8be63d4961a38d107ca90dead3aa5632';

    let input = document.querySelector('.i-1').value;
    city = input;

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;


    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status != 200) {
        console.log(xhr.status + ' ' + xhr.statusText);
    } else {
        let DATA = JSON.parse(xhr.responseText); // Передал в формате строки
        console.log(DATA);

        out = (DATA.main.temp - 273).toFixed(1);
        wind = DATA.wind.speed;
    }

    document.querySelector('.out').innerHTML = `Температура в городе ${city} равна ${out} градус(ов) <br>  Скорость ветра ${wind} м/c`;

}

document.querySelector('.show').onclick = weatherApi;






