class Weather {
  constructor(city, country) {
    // Register for free at https://openweathermap.org/api
    this.apiKey = "375661b8daf69e4c90ccdb1bb32bd31b";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const reponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&units=metric&appid=${this.apiKey}`
    );

    const responseData = await reponse.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
