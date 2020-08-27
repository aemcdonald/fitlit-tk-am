const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/sleep-sub');
const Sleep = require('../src/sleep');


describe('Sleep', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it('Should return single user based on ID', () => {
    let user1 = sleep.getUser(1);
    expect(user1[0]).to.equal(sleepData[0]);
  });

  it('Should return a user\'s average number of hours slept per day for all time', () => {
    let user1Avg = Math.round(sleep.averageSleepDay(1));
    expect(user1Avg).to.equal(8);
  });
});
