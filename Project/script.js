function changeWeather() {
    const temperatureElements = document.getElementsByClassName("temperature");
    const weatherElements = document.getElementsByClassName("weather");
  
    for (let i = 0; i < temperatureElements.length; i++) {
      const temperature = Number(temperatureElements[i].textContent);
      const weatherElement = weatherElements[i];
  
      if (temperature > 30) {
        weatherElement.textContent = "Blazing Hot";
      } else if (temperature > 24 && temperature <= 30) {
        weatherElement.textContent = "Sunny and Warm";
      } else if (temperature > 19 && temperature <=24) {
        weatherElement.textContent = "Sunny with a chance of Clouds";
      } else if (temperature > 14 && temperature <= 19) {
        weatherElement.textContent = "Breezy";
      } else if (temperature > 9 && temperature <= 14) {
        weatherElement.textContent = "Chilly but Cozy";
      }else if (temperature > 4 && temperature <= 9) {
        weatherElement.textContent = "Cold,Bundle Up!";
      }else if (temperature < 5) {
        weatherElement.textContent = "Freezing";
      }
    }
  }
  
  changeWeather();

  function changeEmoji() {
    const temperatureElements = document.getElementsByClassName("temperature");
    const emojiElements = document.getElementsByClassName("emoji");
  
    for (let i = 0; i < temperatureElements.length; i++) {
        const temperature = Number(temperatureElements[i].textContent);
        const emojiElement = emojiElements[i];
    
        if (temperature > 30) {
          emojiElement.textContent = "🔥🔥🔥";
        } else if (temperature > 24 && temperature <= 30) {
          emojiElement.textContent = "☀️☀️";
        } else if (temperature > 19 && temperature <=24) {
          emojiElement.textContent = "🌥️😎";
        } else if (temperature > 14 && temperature <= 19) {
          emojiElement.textContent = "🍂🍃";
        } else if (temperature > 9 && temperature <= 14) {
          emojiElement.textContent = "🥶";
        }else if (temperature > 4 && temperature <= 9) {
          emojiElement.textContent = "☁️🥶";
        }else if (temperature < 5) {
          emojiElement.textContent = "❄️❄️❄️";
        }
      }
  }
  
  changeEmoji();
  
  const input = document.getElementById('location');

  input.addEventListener('input', function() {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
  });
  
  const locationInput = document.getElementById('location');
const placeElement = document.getElementById("place");
locationInput.addEventListener('input', () => {
  const location = locationInput.value;
  const temperatureArrayElements = document.querySelectorAll('.temperature');
  const temperatureArray = Array.from(temperatureArrayElements);

  if (location === "Lagos") {
	placeElement.textContent = "Lagos, NG";
    temperatureArray[0].textContent = 28;
    temperatureArray[1].textContent = 28;
    temperatureArray[2].textContent = 29;
    temperatureArray[3].textContent = 29;
    temperatureArray[4].textContent = 29;
    temperatureArray[5].textContent = 29;
  } else if (location === "London") {
	placeElement.textContent = "London, GB";
    temperatureArray[0].textContent = 25;
    temperatureArray[1].textContent = 23;
    temperatureArray[2].textContent = 24;
    temperatureArray[3].textContent = 25;
    temperatureArray[4].textContent = 24;
    temperatureArray[5].textContent = 24;
  }else if (location === "Mumbai") {
	placeElement.textContent = "Mumbai, IN";
    temperatureArray[0].textContent = 32;
    temperatureArray[1].textContent = 32;
    temperatureArray[2].textContent = 32;
    temperatureArray[3].textContent = 31;
    temperatureArray[4].textContent = 32;
    temperatureArray[5].textContent = 30;
  }else if (location === "Norway") {
	placeElement.textContent = "Norway, US";
    temperatureArray[0].textContent = 26;
    temperatureArray[1].textContent = 24;
    temperatureArray[2].textContent = 22;
    temperatureArray[3].textContent = 26;
    temperatureArray[4].textContent = 25;
    temperatureArray[5].textContent = 25;
  }else if (location === "Cañada") {
	placeElement.textContent = "Cañada, ES";
    temperatureArray[0].textContent = 37;
    temperatureArray[1].textContent = 31;
    temperatureArray[2].textContent = 34;
    temperatureArray[3].textContent = 35;
    temperatureArray[4].textContent = 36;
    temperatureArray[5].textContent = 35;
  } else {
    placeElement.textContent = "Location not found";
  }
});

const searchInput = document.getElementById('location');
const content = document.querySelector('.content');
const errorMessage = document.getElementById('error-message'); 

searchInput.addEventListener('input', () => {
  const location = searchInput.value;
  const validLocations = ["Lagos", "London", "Mumbai", "Norway", "Canada"]; 

  if (validLocations.includes(location)) {
    content.classList.remove('hidden');
    errorMessage.textContent = ''; // Clear any previous error message
  } else if (location === '') {
    content.classList.add('hidden');
    errorMessage.textContent = ''; // Clear any previous error message
  } else {
    content.classList.add('hidden');
    errorMessage.textContent = 'Invalid location';
  }
});
