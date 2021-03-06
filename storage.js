class Storage {
  constructor() {
    this.city
    this.defaultCity = 'Jersey City'
  }

  getLocationData() {
    localStorage.getItem('city') === null
      ? (this.city = this.defaultCity)
      : (this.city = localStorage.getItem('city'))

    return {
      city: this.city
    }
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}
