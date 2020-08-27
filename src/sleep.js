const sleepData = require('../data/sleep');

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  getUser(id) {
    return this.sleepData.filter(user => {
      return user.userID === id;
    });
  }
  averageSleepDay(id) {
    let userData = this.getUser(id);
    let totalSleep = userData.reduce((totalHrsSlept, user) => {
      return totalHrsSlept += user.hoursSlept;
    }, 0);
    return +parseFloat((totalSleep / userData.length).toFixed(2));
  }
  averageSleepQuality(id) {
    let userData = this.getUser(id);
    let totalSleepQuality = userData.reduce((allQuality, user) => {
      return allQuality += user.sleepQuality;
    }, 0);
    return +parseFloat((totalSleepQuality / userData.length).toFixed(2));
  }
}



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
