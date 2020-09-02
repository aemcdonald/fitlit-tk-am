const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-sub');
const User = require('../src/users');

describe('User', () => {
  it('Should return a user\'s first name', () => {
    let user = new User(userData[0])
    let userName = user.getFirstName();
    expect(userName).to.equal('Luisa');
  });
});
