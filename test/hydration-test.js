const chai = require('chai');
const expect = chai.expect;
const moment = require('moment');

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
});
