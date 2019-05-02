// Init LS object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);
  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

//weather.changeLocation("Manteigas", "pt");

// Get weather
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
