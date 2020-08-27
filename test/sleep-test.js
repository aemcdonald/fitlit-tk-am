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
    expect(user1Avg).to.equal(7.92);
  });

  it('Should return a user\'s all time average sleep quality', () => {
    let user1Avg = sleep.averageSleepQuality(1);
    expect(user1Avg).to.equal(2.41);
  });

  it('Should return how many hours a user slept on a given day', () => {
    let user1 = sleep.dailyHoursSlept(1, "2019/06/23");
    expect(user1).to.equal(7.8);
  });

  it('Should return user\'s sleep quality on a given day', () => {
    let user1 = sleep.dailySleepQuality(1, "2019/06/23");
    expect(user1).to.equal(1.5);
  });

  it('Should return hours slept per day over a given week', () => {
    let user1 = sleep.dailySleepPerWeek(1, "2019/06/23");
    let week = [8, 10.4, 10.7, 9.3, 7.8, 7, 7.8];
    expect(user1).to.deep.equal(week);
  });
});
