function searchFormSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = searchInput.value;

  let apiKey = "5aaf35163dab1f6084ofbdbf0bt4edf4";
  let city = searchInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let tempElement = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temperature;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormSubmit);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDate = days[day];

currentDate.innerHTML = `${formattedDate} ${hours}:${minutes}`;
