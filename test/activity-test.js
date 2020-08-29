const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-sub');
const userData = require('../data/users-sub');
const Activity = require('../src/activity');

describe('Activity', () => {
  let activity;
  beforeEach(() => {
    activity = new Activity(activityData);
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
});
