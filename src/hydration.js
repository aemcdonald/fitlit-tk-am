const hydrationData = require('../data/hydration');
const moment = require('moment');

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  getUser(id) {
    return this.hydrationData.filter(user => {
      return user.userID === id;
    });
  }
  averageFluidOunces(id) {
    this.getUser(id);
    let allOunces = this.hydrationData.reduce((totalOunces, user) => {
      return totalOunces += user.numOunces
    }, 0);
    return allOunces / this.hydrationData.length;
  }
  fluidOuncesOnDay(id, date) {
    let userData = this.getUser(id);
    let userOunces = userData.find(user => {
      return user.date === date;
    });
    return userOunces.numOunces;
  }
  fluidOuncesWeek(id, date) {
    let userData = this.getUser(id);
    let userWeekData = userData.slice(-7);
    return userWeekData.map(day => {
      return day.numOunces;
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
