class User {
  constructor(user) {
    this.user = user;
  }
  getFirstName() {
    let fullNames = this.user.name.split(' ');
    return fullNames[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
