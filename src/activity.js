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
  getUserMilesWalked(id, date) {
    let day = this.getObjectByDate(id, date);
    let userInfo = this.userData.find(user => {
      return user.id === id;
    });
    console.log(userInfo)
    let totalFeet = userInfo.strideLength * day.numSteps;
    return +parseFloat((totalFeet / 5280).toFixed(2));
  }
}





 if (typeof module !== 'undefined') {
   module.exports = Activity;
 }
