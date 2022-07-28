const WEATHER_API_BASE_URL = 'https://api.openweathermap.org';
const WEATHER_API_KEY = 'a7d2e2249e5c96fb03fbcbbd0ecbf0f0';
const MAX_DAILY_FORECAST = 5;


function displayWeather(data) {

    console.log(data)
    //get the weather data from the location
    const {current, daily } = data;

    //get the current weather data
    const = {temp, feels_like, humidity, weather} = current;

    //get the daily weather data
    const = {temp: dailyTemp, humidity: dailyHumidity, weather: dailyWeather} = daily[0];

    //get the weather icon
    const = {icon} = weather[0];
}


function onSearchWeather(location) {
    console.log(location)

    // Lookup location to get lat/lon
    var apiUrl = `${WEATHER_API_BASE_URL}/geo/1.0/direct?q=${location}&limit=5&appid=${WEATHER_API_KEY}`;
    fetch(apiUrl)
    .then(response => response.jason())
    .then((data) => {
        //pick up the first location from the results
        const location = data[0];
        const { lat, lon } = location;

        // Get the weather for the cached location
        var apiUrl = `${WEATHER_API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`
        fetch(apiUrl)
        .then(response => response.jason())
        .then(data => {
            //pick up the first location from the results
            console.log(data)

            //display the weather data
            displayWeather(data);
        })
    })

}

function onSearchLocation() {
  var locationName = searchText.ariaValue;
  if (!locationName) {
    alert;
    ("Please enter a location");
    return;
  }
  else {
    onSearchWeather(locationName);
  }}
}

const searchText = document.getElementById("searchText");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", onSearchLocation);
