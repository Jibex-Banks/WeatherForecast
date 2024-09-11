const apiKey = '853c622a150e1520360f413d47a7355c'; // Replace with your OpenWeatherMap API key

document.getElementById('location').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeatherForecast();
    }
});

function getWeatherForecast() {
    const location = document.getElementById('location').value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateCurrentWeather(data);
            updateForecast(data);
        })
        // .catch(error => {
        //     alert("City not found!");
        //     console.error("Error fetching weather data:", error);
        // });
}

function updateCurrentWeather(data) {
    const currentWeather = data.list[0]; // Current weather data

    const city = data.city.name;
    const country = data.city.country;
    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;
    const emoji = getWeatherEmoji(currentWeather.weather[0].main);

    document.getElementById('place').textContent = `${city}, ${country}`;
    document.getElementById('temperature').textContent = Math.round(temperature);
    document.getElementById('weather').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
    document.getElementById('emoji').textContent = emoji;

    const date = new Date(currentWeather.dt_txt);
    document.getElementById('date').textContent = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function updateForecast(data) {
    const forecastElements = document.querySelectorAll('table .weather-box');
    const forecastList = data.list;

    let dayIndex = 0;
    for (let i = 8; i < forecastList.length; i += 8) { // Skipping 8 times (3-hour intervals) to get daily data
        const forecast = forecastList[i];
        const temperature = Math.round(forecast.main.temp);
        const weatherDescription = forecast.weather[0].description;
        const emoji = getWeatherEmoji(forecast.weather[0].main);

        const date = new Date(forecast.dt_txt);
        const dayName = date.toLocaleDateString(undefined, { weekday: 'long' });

        forecastElements[dayIndex].querySelector('th').textContent = dayName;
        forecastElements[dayIndex].querySelector('.temperature').textContent = temperature;
        forecastElements[dayIndex].querySelector('.weather').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        forecastElements[dayIndex].querySelector('.emoji').textContent = emoji;

        dayIndex++;
    }
}

function getWeatherEmoji(weather) {
    switch (weather.toLowerCase()) {
        case 'clear':
            return '☀️';
        case 'clouds':
            return '☁️';
        case 'rain':
            return '🌧️';
        case 'snow':
            return '❄️';
        case 'thunderstorm':
            return '⛈️';
        default:
            return '🌥️';
    }
}
