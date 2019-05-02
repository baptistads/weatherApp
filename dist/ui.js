class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.details = document.getElementById("w-details");
    this.temp = document.getElementById("w-temp");
    this.maxTemp = document.getElementById("w-maxTemp");
    this.minTemp = document.getElementById("w-minTemp");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.temp.textContent = `Actual Temperature: ${weather.main.temp}º`;
    this.maxTemp.textContent = `Max Temperature: ${weather.main.temp_max}º`;
    this.minTemp.textContent = `Min Temperature: ${weather.main.temp_min}º`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
  }
}
