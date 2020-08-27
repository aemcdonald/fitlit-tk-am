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
}



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
