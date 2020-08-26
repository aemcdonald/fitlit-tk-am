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
}


//    moment("2019/06/15").subtract(7, 'days').calendar();




if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
