//Current Date and Time

let now = new Date();

let currentDate = document.querySelector("h3.date");
let currentTime = document.querySelector("h3.time");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

currentDate.innerHTML = `${day} ${month} ${date}, ${year}`;
currentTime.innerHTML = `${hours}:${minute}`;

function displayForcast() {
  let forecastElement = document.querySelector("#forecast-weather");

  let forecastHTML = `<div class="row daysOfWeek">`;
  let days = ["Thurs", "Fri", "Sat"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
          <div class="col-2">
              <div class="weather-forcast-date">
                ${day}
              </div>
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny day">
            <div>
              <span class="weather-forcast-temp-max">
                18°
              </span>
              <span class="weather-focrast-temp-min">
                 50°
              </span>
            </div>
          </div>
          `;
  });

  forsecastHTML = `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

//Search City & Geolocation

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input").value;
  findCity(searchInput);
  let mainCity = document.querySelector("#city-input");
  mainCity.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#city-search-form");
let submitButton = document.querySelector("#search-bar-button");
form.addEventListener("submit", searchCity);

function showWeather(response) {
  console.log(response.data);
  let h1 = document.querySelector("#city-info");
  h1.innerHTML = `${response.data.name}`;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(celsiusTemp);

  celsiusTemp = response.data.main.temp;

  let weatherDescription = document.querySelector(
    "#current-city-weather-descrption"
  );
  weatherDescription.innerHTML = `${response.data.weather[0].main}`;

  let iconElement = document.querySelector("#current-weather-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function findCity(city) {
  let apiKey = "69b40f8beeff9db6adde6eb2258de3ef";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function getPosition(position) {
  let apiKey = "69b40f8beeff9db6adde6eb2258de3ef";
  let units = "metric";
  let currentLat = position.coords.latitude;
  let currentLong = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLong}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(getPosition);

//Switch converstion Units//

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  //remove active class from link
  celsiuslink.classList.remove("active");
  fahrenheitlink.classList.add("active");
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  celsiuslink.classList.add("active");
  fahrenheitlink.classList.remove("active");
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

displayForcast();

let fahrenheitlink = document.querySelector("#fahrenheit-link");

fahrenheitlink.addEventListener("click", displayFahrenheitTemp);

let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", displayCelsiusTemp);
