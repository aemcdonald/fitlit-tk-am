class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  getUser(id) {
    return this.activityData.filter(user => user.userID === id);
  }

  getObjectByDate(id, date) {
    let userObj = this.getUser(id);
    return userObj.find(user => user.date === date);
  }

  getStepsOnDay(id, date) {
    let day = this.getObjectByDate(id, date);
    return day.numSteps
  }

  getStairsOnDay(id, date) {
    let day = this.getObjectByDate(id, date);
    return day.flightsOfStairs;
  }

  getAnyWeek(id, date) {
    let userData = this.getUser(id);
    let currentUser = this.getObjectByDate(id, date);
    let index = userData.indexOf(currentUser);
    return userData.slice(index - 6, index + 1);
  }

  getUserMilesWalked(id, date) {
    let stepsOnDay = this.getStepsOnDay(id, date);
    let userInfo = this.userData.find(user => user.id === id);
    let totalFeet = userInfo.strideLength * stepsOnDay;
    return +parseFloat((totalFeet / 5280).toFixed(2));
  }

  getUserMinutes(id, date) {
    let user = this.getObjectByDate(id, date);
    return user.minutesActive;
  }

  getAvgMinutes(id, date) {
    let userWeek = this.getAnyWeek(id, date)
    let totalMinutes = userWeek.reduce((total, day) => {
      return total += day.minutesActive;
    }, 0);
    return Math.floor(totalMinutes / userWeek.length);
  }

  stepGoalReached(id, date) {
    let day = this.getObjectByDate(id, date);
    let userInfo = this.userData.find(user => user.id === id);
    return day.numSteps >= userInfo.dailyStepGoal ? true : false;
  }

  getUserWeeklySteps(id, date) {
    let week = this.getAnyWeek(id, date);
    return week.reduce((total, day) => {
      return total += day.numSteps;
    }, 0);
  }

  getUserWeeklyStairs(id, date) {
    let week = this.getAnyWeek(id, date);
    return week.reduce((total, day) => {
      return total += day.flightsOfStairs;
    }, 0);
  }

  getUserWeeklyMinutes(id, date) {
    let week = this.getAnyWeek(id, date);
    return week.reduce((total, day) => {
      return total += day.minutesActive;
    }, 0);
  }

  avgStairsByDate(date) {
    let dateData = this.activityData.filter(user => user.date === date);
    let allStairs = dateData.reduce((total, user) => {
      return total += user.flightsOfStairs;
    }, 0);
    return +parseFloat((allStairs / dateData.length).toFixed(2));
  }

  avgStepsByDate(date) {
    let dateData = this.activityData.filter(user => user.date === date);
    let allSteps = dateData.reduce((total, user) => {
      return total += user.numSteps;
    }, 0);
    return +parseFloat((allSteps / dateData.length).toFixed(2));
  }

  avgMinutesByDate(date) {
    let dateData = this.activityData.filter(user => user.date === date);
    let allMinutes = dateData.reduce((total, user) => {
      return total += user.minutesActive;
    }, 0);
    return +parseFloat((allMinutes / dateData.length).toFixed(2));
  }
  
  getUserTotalSteps(id) {
    let userData = this.getUser(id);
    return userData.reduce((total, user) => {
      return total += user.numSteps;
    }, 0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
