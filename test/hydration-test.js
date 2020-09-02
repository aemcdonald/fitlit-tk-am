const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/hydration-sub');
const Hydration = require('../src/hydration');

describe('Hydration', () => {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationData);
  });

  it('Should return single user based on ID', () => {
    let user1 = hydration.getUser(1);
    expect(user1[1]).to.equal(hydrationData[3]);
  });

  it('Should calculate a user\'s average fluid ounces for all time', () => {
    let user1Avg = hydration.averageFluidOunces(1);
    expect(user1Avg).to.equal(59.4);
  });

  it('Should calculate a user\'s fluid ounces for a specific day', () => {
    let user1Ounces = hydration.fluidOuncesOnDay(1, "2019/06/15");
    expect(user1Ounces).to.equal(37);
  });

  it('Should return a user\'s fluid ounces each day for a given week', () => {
    let user1data = hydration.fluidOuncesWeek(1);
    let user1Week = [61, 91, 50, 50, 43, 39, 61];
    expect(user1data).to.deep.equal(user1Week);
  });
});
