const temperature = document.getElementById('temperature')
city = document.getElementById('city')
description = document.getElementById('description')
wind = document.getElementById('wind-speed')
change = document.getElementById('change')
search = document.getElementById('search').value
icon = document.getElementById('icon')
main = document.getElementById('main')
humidity = document.getElementById('humidity');

function submit() {
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+ document.getElementById('search').value + '&APPID=7da207efce91412d26db5e81f3f2203b', {mode: 'cors'})
   .then(function(response) {
      return response.json()
   })
   .then(function(response) {
     let weather = response.main.temp
     temperature.innerHTML = Math.floor(weather - 273.15) + '°C';
     city.innerHTML = response.name
     description.innerHTML = response.weather[0].description
     main.innerHTML = response.weather[0].main
     humidity.innerHTML = response.main.humidity + '%'
     icon.src = ('https://openweathermap.org/img/w/') + response.weather[0].icon + '.png'
     wind.innerHTML = response.wind.speed
     change.addEventListener('click', ()  => {
        c = Math.floor(weather - 273.15) + '°C';
        f = Math.floor(weather - 273.15) * 9/5 + 32 + '°F';
        if (temperature.innerHTML == c) {
        temperature.innerHTML = Math.floor(weather - 273.15) * 9/5 + 32 + '°F'; 
        } else if (temperature.innerHTML == f) {
           temperature.innerHTML = Math.floor(weather - 273.15) + '°C';
        }
     })
     
// configure your URLs by weather (using the weather description in this case)
const urls = {
   'clear sky, few clouds': 'https://static.videezy.com/system/resources/previews/000/038/877/original/2_19_08_19.mp4',
   'scattered clouds': 'https://static.videezy.com/system/resources/previews/000/011/761/original/Clouds_Timelapse_57_-_30s_-_4k_res.mp4',
   'broken clouds, overcast clouds': 'https://static.videezy.com/system/resources/previews/000/007/196/original/dark_clouds_timelapse.mp4',    
   'thunderstorm': 'https://static.videezy.com/system/resources/previews/000/039/128/original/stockvideo4k_007.mp4',
   'snow': 'https://static.videezy.com/system/resources/previews/000/019/708/original/winter2.mp4',
   'fog, mist, haze, smoke': 'https://static.videezy.com/system/resources/previews/000/004/935/original/Foggy_Winter_4K_Living_Background.mp4',
   'shower rain, light rain, rain': 'https://static.videezy.com/system/resources/previews/000/007/202/original/parking_with_rain.mp4'
};

// function that loads the video based on a URL
function loadVideo(url) {
   const v1 = document.createElement('VIDEO');
   v1.setAttribute('src', url);
   v1.setAttribute('class', 'v1');
   document.body.appendChild(v1);
   v1.autoplay = true;
   v1.load();
}

// call the function with the response from your API
loadVideo(urls[response.weather[0].description]);
      }
)
};