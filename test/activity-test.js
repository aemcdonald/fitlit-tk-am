const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-sub');
const userData = require('../data/users-sub');
const Activity = require('../src/activity');

describe('Activity', () => {
  let activity;
  beforeEach(() => {
    activity = new Activity(activityData, userData);
  });

  it('Should return single user based on ID', () => {
    let user1 = activity.getUser(1);
    expect(user1[0]).to.equal(activityData[0]);
  });

  it('Should return user data by date', () => {
    let user1Data = activity.getObjectByDate(1, "2019/06/15");
    expect(user1Data).to.equal(activityData[0]);
  });

  it('Should return the miles a user has walked', () => {
    let user1Data = activity.getUserMilesWalked(1, "2019/06/15");
    expect(user1Data).to.equal(2.91);
  });

  it('Should return a user\'s active mintes for a day', () => {
    let user1Data = activity.getUserMinutes(1, "2019/06/15");
    expect(user1Data).to.equal(140);
  });

  it('Should return a user\'s average minutes active for a week', () => {
    let user1Data = activity.getAvgMinutes(1, "2019/06/21");
    expect(user1Data).to.equal(171)
  });

  it('Should return false if a user has not reached their step goal', () => {
    let user1Data = activity.stepGoalReached(1, "2019/06/15");
    expect(user1Data).to.equal(false);
  });

  it('Should return true if a user has reached their step goal', () => {
    let user2Data = activity.stepGoalReached(2, "2019/06/17");
    expect(user2Data).to.equal(true);
  });

  it('Should determine average stairs climbed on a date for all users', () => {
    let avgStairs = activity.avgStairsByDate("2019/06/15");
    expect(avgStairs).to.equal(19.67);
  });

  it('Should determine average steps on a date for all users', () => {
    let avgSteps = activity.avgStepsByDate("2019/06/15");
    expect(avgSteps).to.equal(5091);
  });

  it('Should determine average minutes active on a date for all users', () => {
    let avgMinutes = activity.avgMinutesByDate("2019/06/15");
    expect(avgMinutes).to.equal(131.33);
  });

  it('Should determine a user\'s total number of steps for all time', () => {
    let user1TotalSteps = activity.getUserTotalSteps(1);
    expect(user1TotalSteps).to.equal(90032);
  });
});
