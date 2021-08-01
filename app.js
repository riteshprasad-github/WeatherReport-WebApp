
//api key [ default = c276bd0f4cbd4df332b778b32292fcb1 ]

// [ Base url = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} ]


const weatherApi = {
    key: "c276bd0f4cbd4df332b778b32292fcb1",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// ###### Event Listener Function on keypress ######

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) { 
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block"; // Show The animated Data when ENTER KEY press after write city/country
    }

});

// ###### Get Weather Report ######
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// ##### Show Weather Report #####
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if(weatherType.textContent == 'Clear') { /*CLEAR*/
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') { /*CLOUD*/

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Drizzle') { /*foggy*/
    
        document.body.style.backgroundImage = "url('images/foggy.jpg')";
        
    } else if(weatherType.textContent == 'Mist') { /*foggy*/
    
        document.body.style.backgroundImage = "url('images/foggy.jpg')";
        
    } else if(weatherType.textContent == 'Haze') { /*HAZE*/

        document.body.style.backgroundImage = "url('images/foggy.jpg')";
        
    } else if(weatherType.textContent == 'Fog') { /*Fog*/

        document.body.style.backgroundImage = "url('images/foggy.jpg')";
        
    }else if(weatherType.textContent == 'Rain') { /*RAIN*/
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') { /*SNOW*/
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') { /*ThunderStrom*/
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } else if(weatherType.textContent == 'Strong Wind') { /*Strong wind*/
    
        document.body.style.backgroundImage = "url('images/strongwind.jpg')";
        
    } else if(weatherType.textContent == 'Wind') { /*Wind*/
    
        document.body.style.backgroundImage = "url('images/strongwind.jpg')";
        
    } else if(weatherType.textContent == 'Sunny') { /*Sunny*/
    
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
        
    } else if(weatherType.textContent == 'Night') { /*Night*/
    
        document.body.style.backgroundImage = "url('images/night.jpg')";
}

}

// ##### Date manage #####
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}

