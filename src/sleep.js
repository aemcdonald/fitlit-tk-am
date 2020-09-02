class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  getUser(id) {
    return this.sleepData.filter(user => user.userID === id);
  }
  getObjectByDate(id, date) {
    let userData = this.getUser(id);
    return userData.find(user => user.date === date);
  }
  getAnyWeek(id, date) {
    let userData = this.getUser(id);
    let currentUser = this.getObjectByDate(id, date);
    let index = userData.indexOf(currentUser);
    return userData.slice(index - 6, index + 1);
  }
  getMostRecentWeek() {
    let userData = this.getUser(1);
    let userWeekData = userData.slice(-7);
    return userWeekData.map(day => day.date);
  }
  averageSleepDay(id) {
    let userData = this.getUser(id);
    let totalSleep = userData.reduce((totalHrsSlept, user) => {
      return totalHrsSlept += user.hoursSlept;
    }, 0);
    return +parseFloat((totalSleep / userData.length).toFixed(2));
  }
  userAvgSleepQuality(id) {
    let userData = this.getUser(id);
    let totalSleepQuality = userData.reduce((allQuality, user) => {
      return allQuality += user.sleepQuality;
    }, 0);
    return +parseFloat((totalSleepQuality / userData.length).toFixed(2));
  }
  dailyHoursSlept(id, date) {
    let currentUser = this.getObjectByDate(id, date);
    return currentUser.hoursSlept;
  }
  dailySleepQuality(id, date) {
    let currentUser = this.getObjectByDate(id, date);
    return currentUser.sleepQuality;
  }
  dailySleepPerWeek(id, date) {
    let week = this.getAnyWeek(id, date);
    return week.map(night => night.hoursSlept);
  }
  sleepQualityPerWeek(id, date) {
    let week = this.getAnyWeek(id, date);
    return week.map(night => night.sleepQuality);
  }
  allAvgSleepQuality() {
    let allSleepQuality = this.sleepData.reduce((total, object) => {
      return total += object.sleepQuality;
    }, 0);
    return allSleepQuality / this.sleepData.length;
  }
  getAvgSleepAboveThree(startDate, endDate) {
    let usersWeekData = this.sleepData.filter(day => {
      return day.date >= startDate && day.date <= endDate
    })
    let usersTotalSleep = usersWeekData.reduce((userSleepQuality, user) => {
      if (!userSleepQuality[user.userID]) {
        userSleepQuality[user.userID] = 0
      }
      userSleepQuality[user.userID] += user.sleepQuality;
      return userSleepQuality
    }, {} )
    let avgSleepQualityValues = Object.values(usersTotalSleep);
    let userAverages = avgSleepQualityValues.map((value, i) => {
      return { [Object.keys(usersTotalSleep)[i]]: value / 7 }
    })
    console.log(userAverages) //array of user's averages
  }
  mostHoursSleptByDay(date) {
    let dateData = this.sleepData.filter(day => day.date === date);
    let sorted = dateData.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let mostHours = sorted.filter(user => user.hoursSlept === sorted[0].hoursSlept);
    return mostHours;
  }
  findLongNightSleep(id) {
    let userData = this.getUser(id);
    let longestNight = userData.map(night => night.hoursSlept)
    return Math.max(...longestNight)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
