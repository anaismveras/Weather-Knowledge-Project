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

//Changeing C to F for furture temps//

//MONDAY
function convertMonTempToFahrenheit(event) {
  event.preventDefault();
  let monTempElement = document.querySelector("#mon-temp");
  monTempElement.innerHTML = "42°";
}

function convertMonTempToCelsius(event) {
  event.preventDefault();
  let monTempElement = document.querySelector("#mon-temp");
  monTempElement.innerHTML = "6°";
}

let monTempFahrenheitLink = document.querySelector("#mon-temp-fahrenheit");
monTempFahrenheitLink.addEventListener("click", convertMonTempToFahrenheit);

let monTempCelsiusLink = document.querySelector("#mon-temp-celsius");
monTempCelsiusLink.addEventListener("click", convertMonTempToCelsius);

//TUESDAY
function convertTuesTempToFahrenheit(event) {
  event.preventDefault();
  let tuesTempElement = document.querySelector("#tues-temp");
  tuesTempElement.innerHTML = "41°";
}

function convertTuesTempToCelsius(event) {
  event.preventDefault();
  let tuesTempElement = document.querySelector("#tues-temp");
  tuesTempElement.innerHTML = "5°";
}

let tuesTempFahrenheitLink = document.querySelector("#tues-temp-fahrenheit");
tuesTempFahrenheitLink.addEventListener("click", convertTuesTempToFahrenheit);

let tuesTempCelsiusLink = document.querySelector("#tues-temp-celsius");
tuesTempCelsiusLink.addEventListener("click", convertTuesTempToCelsius);

//WEDNESDAY
function convertWedTempToFahrenheit(event) {
  event.preventDefault();
  let wedTempElement = document.querySelector("#wed-temp");
  wedTempElement.innerHTML = "50°";
}

function convertWedTempToCelsius(event) {
  event.preventDefault();
  let wedTempElement = document.querySelector("#wed-temp");
  wedTempElement.innerHTML = "10°";
}

let wedTempFahrenheitLink = document.querySelector("#wed-temp-fahrenheit");
wedTempFahrenheitLink.addEventListener("click", convertWedTempToFahrenheit);

let wedTempCelsiusLink = document.querySelector("#wed-temp-celsius");
wedTempCelsiusLink.addEventListener("click", convertWedTempToCelsius);

//THURSDAY
function convertThursTempToFahrenheit(event) {
  event.preventDefault();
  let thursTempElement = document.querySelector("#thurs-temp");
  thursTempElement.innerHTML = "53°";
}

function convertThursTempToCelsius(event) {
  event.preventDefault();
  let thursTempElement = document.querySelector("#thurs-temp");
  thursTempElement.innerHTML = "12°";
}

let thursTempFahrenheitLink = document.querySelector("#thurs-temp-fahrenheit");
thursTempFahrenheitLink.addEventListener("click", convertThursTempToFahrenheit);

let thursTempCelsiusLink = document.querySelector("#thurs-temp-celsius");
thursTempCelsiusLink.addEventListener("click", convertThursTempToCelsius);

//FRIDAY
function convertFriTempToFahrenheit(event) {
  event.preventDefault();
  let friTempElement = document.querySelector("#fri-temp");
  friTempElement.innerHTML = "45°";
}

function convertFriTempToCelsius(event) {
  event.preventDefault();
  let friTempElement = document.querySelector("#fri-temp");
  friTempElement.innerHTML = "7°";
}

let friTempFahrenheitLink = document.querySelector("#fri-temp-fahrenheit");
friTempFahrenheitLink.addEventListener("click", convertFriTempToFahrenheit);

let friTempCelsiusLink = document.querySelector("#fri-temp-celsius");
friTempCelsiusLink.addEventListener("click", convertFriTempToCelsius);

//SATURDAY
function convertSatTempToFahrenheit(event) {
  event.preventDefault();
  let satTempElement = document.querySelector("#sat-temp");
  satTempElement.innerHTML = "65°";
}

function convertSatTempToCelsius(event) {
  event.preventDefault();
  let satTempElement = document.querySelector("#sat-temp");
  satTempElement.innerHTML = "18°";
}

let satTempFahrenheitLink = document.querySelector("#sat-temp-fahrenheit");
satTempFahrenheitLink.addEventListener("click", convertSatTempToFahrenheit);

let satTempCelsiusLink = document.querySelector("#sat-temp-celsius");
satTempCelsiusLink.addEventListener("click", convertSatTempToCelsius);

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
  let h1 = document.querySelector("#city-info");
  h1.innerHTML = `${response.data.name}`;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let weatherDescription = document.querySelector(
    "#current-city-weather-descrption"
  );
  weatherDescription.innerHTML = `${response.data.weather[0].main}`;
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
