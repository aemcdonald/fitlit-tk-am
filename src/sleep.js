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
  dailyHoursSlept(id, date) {
    let userData = this.getUser(id);
    let currentUser = userData.find(user => {
      return user.date === date;
    });
    return currentUser.hoursSlept;
  }
  dailySleepQuality(id, date) {
    let userData = this.getUser(id);
    let currentUser = userData.find(user => {
      return user.date === date;
    });
    return currentUser.sleepQuality;
  }
}



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
