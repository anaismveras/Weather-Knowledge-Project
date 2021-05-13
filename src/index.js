//Current Date and Time

let now = new Date();

let currentDate = document.querySelector("h3.date");
let currentTime = document.querySelector("h3.time");

let date = now.getDate();
let hours = now.getHours();
let minute = now.getMinutes();
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

//Changing degrees from C to F for current temp

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = "58°";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = "14°";
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

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
  currentTemp.innerHTML = Math.round(response.data.main.temp);
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
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function getPosition(position) {
  let apiKey = "69b40f8beeff9db6adde6eb2258de3ef";
  let units = "imperial";
  let currentLat = position.coords.latitude;
  let currentLong = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLong}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(getPosition);

//Weather Icon
