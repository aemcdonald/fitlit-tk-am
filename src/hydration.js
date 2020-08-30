// const hydrationData = require('../data/hydration');

class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }
  getUser(id) {
    return this.hydrationData.filter(user => {
      return user.userID === id;
    });
  }
  getMostRecentWeek() {
    let userData = this.getUser(1);
    let userWeekData = userData.slice(-7);
    return userWeekData.map(day => {
      return day.date;
    });
  }
  getObjectByDate(id, date) {
    let userData = this.getUser(id);
    return userData.find(user => {
      return user.date === date;
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
    let userOunces = this.getObjectByDate(id, date);
    return userOunces.numOunces;
  }
  fluidOuncesWeek(id) {
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
