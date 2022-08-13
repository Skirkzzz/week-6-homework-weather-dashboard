const WEATHER_API_BASE_URL = "https://api.openweathermap.org";
const WEATHER_API_KEY = "a7d2e2249e5c96fb03fbcbbd0ecbf0f0";
const MAX_DAILY_FORECAST = 5;

const currentCityElement = document.getElementById("current-city");
const dateTimeElement = document.getElementById("date-time");

function displayWeather(data) {
  console.log(data);
  //get the weather data from the location
  const { current, daily } = data;

  dateTimeElement.textContent = daily;

  // dipalay the current date and time
  const date = new Date();
  const dateString = date.toLocaleDateString();
  dateTimeElement.textContent = date.toLocaleDateString();

  //get the current weather data
  const { temp, uvi, humidity, weather, wind_speed } = current;

  document.getElementById("current-temp").textContent = temp;
  document.getElementById("current-wind").textContent = wind_speed;
  document.getElementById("current-humidity").textContent = humidity;
  document.getElementById("current-uv").textContent = uvi;

  const weatherDays = document.getElementById(`weather-days`);
  for (let i = 0; i < MAX_DAILY_FORECAST; i++) {
    const day = daily[i];

    weatherDays.innerHTML += displayDay(day, i);
  }
}

function displayDay(day, index) {
  //get the daily weather data
  const { humidity: dailyHumidity, wind_speed: wind, temp: temp } = day;

  const { day: dayTemp } = temp;

  var dayHtml = `<div class="mb-1">
    <div class="card w-100">
      <h3 class="card-header bg-success ">
        Day +${index + 1}
      </h3>
      <div class="card-body">
        <p class="card-text">
           Temp: ${dayTemp}<br />
           Humidity: ${dailyHumidity}<br />
           Wind Speed: ${wind}<br />
        </p>
      </div>
    </div>
  </div>`;
  return dayHtml;
}

function onSearchWeather(location) {
  console.log(location);

  // Lookup location to get lat/lon
  var apiUrl = `${WEATHER_API_BASE_URL}/geo/1.0/direct?q=${location}&limit=5&appid=${WEATHER_API_KEY}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      //pick up the first location from the results
      const location = data[0];

      console.log(data);
      const { lat, lon, name, country } = location;

      currentCityElement.textContent = `current city: ${name}, ${country}`;

      // Get the weather for the cached location
      var apiUrl = `${WEATHER_API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          //pick up the first location from the results
          console.log(data);

          //display the weather data
          displayWeather(data);
        });
    });
}

function onSearchLocation() {
  var locationName = searchText.value;
  if (!locationName) {
    alert("Please enter a location");
    return;
  } else {
    onSearchWeather(locationName);
  }
}

const searchText = document.getElementById("searchText");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", onSearchLocation);
