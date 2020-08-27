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
  dailySleepPerWeek(id, date) {
    let userData = this.getUser(id);
    let currentUser = userData.find(user => {
      return user.date === date;
    });
    let index = userData.indexOf(currentUser);
    let week = userData.slice(index - 6, index + 1);
    return week.map(night => {
      return night.hoursSlept;
    });
  }
  sleepQualityPerWeek(id, date) {
    let userData = this.getUser(id);
    let currentUser = userData.find(user => {
      return user.date === date;
    });
    let index = userData.indexOf(currentUser);
    let week = userData.slice(index - 6, index + 1);
    return week.map(night => {
      return night.sleepQuality;
    });
  }


  // for a user (id parameter),  and needs a date parameter.
  //run getUser to create an array of single user data.
  // use indexOf to get var index of array element object that corresponds to date argument.
  // run let week = userdata.slice(index - 6, index + 1).
  // use map to return hoursSlept values.
  // return will be an array of hoursSlept values.
}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
