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

  it('Should return a user\'s average hours slept per day for all time', () => {
    let user1Avg = sleep.averageSleepDay(1);
    expect(user1Avg).to.equal(7.9);
  });

  it('Should return a user\'s all time average sleep quality', () => {
    let user1Avg = sleep.userAvgSleepQuality(1);
    expect(user1Avg).to.equal(2.4);
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

  it('Should return sleep quality per day over a given week', () => {
    let user1 = sleep.sleepQualityPerWeek(1, "2019/06/23");
    let week = [2.6, 3.1, 1.2, 1.2, 4.2, 3, 1.5];
    expect(user1).to.deep.equal(week);
  });

  it('Should calculate the average sleep quality for all users', () => {
    let avg = sleep.allAvgSleepQuality();
    expect(avg).to.deep.equal(2.98);
  });

  it('Should find ther user(s) who slept the most hours on a given day', () => {
    let winner = sleep.mostHoursSleptByDay("2019/06/17");
    expect(winner).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    }, {
      "userID": 3,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 4.9
    }])
  });

  it('Should return user\'s with an average sleep quality above 3 in a week', () => {
    let goodSleepers = sleep.getQualityAboveThree("2019/06/15", "2019/06/21")
    expect(goodSleepers).to.deep.equal([
      { user: '2', sleepQuality: 3.4857142857142853 },
      { user: '3', sleepQuality: 3.414285714285714 }
    ])
  });

  it('should find the hours slept of a user\'s longest night of sleep', () => {
    let bestNight = sleep.findLongNightSleep(1);
    expect(bestNight).to.equal(10.7);
  });
});
