const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-sub');
const Users = require('../src/users');

describe('Users', () => {
  it('Should return a user\'s first name', () => {
    let user = new Users(userData[0])
    let userName = user.getFirstName();

    expect(userName).to.equal('Luisa');
  });
});
