 // const activityData = require('../data/activity');
 // const userData = require('../data/users');

 class Activity {
   constructor(activityData, userData) {
     this.activityData = activityData;
     this.userData = userData;
   }
   getUser(id) {
     return this.activityData.filter(user => {
       return user.userID === id;
     });
  }
  getObjectByDate(id, date) {
    let userObj = this.getUser(id);
    return userObj.find(user => {
      return user.date === date;
    });
  }
  getAnyWeek(id, date) {
    let userData = this.getUser(id);
    let currentUser = this.getObjectByDate(id, date);
    let index = userData.indexOf(currentUser);
    return userData.slice(index - 6, index + 1);
  }
  getUserMilesWalked(id, date) {
    let day = this.getObjectByDate(id, date);
    let userInfo = this.userData.find(user => {
      return user.id === id;
    });
    let totalFeet = userInfo.strideLength * day.numSteps;
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
    let userInfo = this.userData.find(user => {
      return user.id === id;
    });
   return day.numSteps >= userInfo.dailyStepGoal ? true : false;
  }
  avgStairsByDate(date) {
    let dateData = this.activityData.filter(user => {
      return user.date === date;
    });
    let allStairs = dateData.reduce((total, user) => {
      return total += user.flightsOfStairs;
    }, 0);
    return +parseFloat((allStairs / dateData.length).toFixed(2));
  }
  avgStepsByDate(date) {
    let dateData = this.activityData.filter(user => {
      return user.date === date;
    });
    let allSteps = dateData.reduce((total, user) => {
      return total += user.numSteps;
    }, 0);
    return +parseFloat((allSteps / dateData.length).toFixed(2));
  }
  avgMinutesByDate(date) {
    let dateData = this.activityData.filter(user => {
      return user.date === date;
    });
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
