// const userData = require('../data/users');

class Users {
  constructor(userData) {
    this.userData = userData;
  }
  getFirstName() {
    let fullNames = this.userData.name.split(' ');
    return fullNames[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Users;
};
