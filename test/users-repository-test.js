const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-sub');
const UsersRepository = require('../src/users-repository');

describe('UsersRepository', () => {
  let usersRepository;
  beforeEach(() => {
    usersRepository = new UsersRepository(userData);
  });

  it('Should return user data based on ID', () => {
    let user1 = usersRepository.returnUserData(1);
    expect(user1).to.deep.equal(userData[0]);
  });

  it('Should return all User average dailyStepGoal', () => {
    expect(usersRepository.getAverageStepGoal()).to.equal(6200);
  });
});
