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
    let user1Avg = sleep.averageSleepDay(1);
    expect(user1Avg).to.deep.equal(7.92);
  });

  it('should return a user\'s all time average sleep quality', () => {
    let user1Avg = sleep.averageSleepQuality(1);
    expect(user1Avg).to.deep.equal(2.41);
  })
});
