 const activityData = require('../data/activity');
 const userData = require('../data/users');

 class Activity {
   constructor(activityData) {
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
    return Math.floor(totalMinutes / userWeek.length)
  }
  stepGoalReached(id, date) {
    let day = this.getObjectByDate(id, date);
    let userInfo = this.userData.find(user => {
      return user.id === id;
    });
   return day.numSteps >= userInfo.dailyStepGoal ? true : false; 
  }
}





 if (typeof module !== 'undefined') {
   module.exports = Activity;
 }
