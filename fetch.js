//confirms bugs and logs them in the terminal
'strict'

//creating a variable for the key obtained from open weather map webisite
const WEATHER_API_BASE_URL = ‘https://api.openweathermap.org’;
const WEATHER_API_KEY = ‘a7d2e2249e5c96fb03fbcbbd0ecbf0f0’;
const MAX_DAILY_FORECAST = 5;
// Lookup the location to get the Lat/Lon
    var apiUrl = `${WEATHER_API_BASE_URL}/geo/1.0/direct?q=${search}&limit=5&appid=${WEATHER_API_KEY}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Pick the First location from the results
            const location = data[0];
 // Get the Weather for the cached location
    var apiUrl = `${WEATHER_API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Pick the First location from the results
            const location = data[0];

window.localStorage.setItem("City Search 1");
window.localStorage.setItem("City Search 2");
window.localStorage.setItem("City Search 3");
window.localStorage.setItem("City Search 4");

for (var i = 0; i < localStorage.length; i++){
    
    var initial = localStorage.key(i);
    var score = localStorage.getItem(initial);

}