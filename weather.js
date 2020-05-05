class Weather {
  constructor(city) {
    this.apiKey = "dd7762140e443b14c84f793f84af7e70";
    this.city = city;
  }
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
  changeLocation(city){
    this.city = city;
  }
}