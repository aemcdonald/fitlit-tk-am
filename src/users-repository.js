// const userData = require('../data/users');

class UsersRepository {
   constructor(userData) {
     this.users = userData;
   }
   returnUserData(id) {
     return this.users.find(user => {
       return user.id === id;
     });
   }
   getAverageStepGoal() {
      let allUserSteps = this.users.reduce((totalSteps, user) => {
       return totalSteps += user.dailyStepGoal
     }, 0);
     return allUserSteps / this.users.length;
   }
}


if (typeof module !== 'undefined') {
  module.exports = UsersRepository;
}
