let randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1);

const usersRepository = new UsersRepository(userData);
const currentUser = new User(userData[randomIndex]);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(sleepData);
const activity = new Activity(activityData, userData);
const randomID = randomIndex + 1;

const waterChart = document.getElementById('water-chart').getContext('2d');
const weeklySleepChart = document.getElementById('weekly-hrs-slept-chart').getContext('2d');
const weeklySleepQualityChart = document.getElementById('weekly-sleep-quality-chart').getContext('2d');

const userGreeting = document.querySelector('.user-greeting');
const userStrideLength = document.querySelector('.user-strideLength');
const userDailyStepGoal = document.querySelector('.user-dailyStepGoal');
const allDailyStepGoal = document.querySelector('.all-dailyStepGoal');
const fluidOzToday = document.querySelector('.fluid-oz-today');
const dailyHrsSlept = document.querySelector('.hours-slept-day');
const dailySleepQuality = document.querySelector('.sleep-quality-day');
const allTimeAvgSleepHrs = document.querySelector('.avg-hours-sleep');
const allTimeAvgSleepQuality = document.querySelector('.avg-sleep-quality');
const distanceWalked = document.querySelector('.distance-walked');
const stepsAllAvg = document.querySelector('.steps-all-avg');
const userStepsToday = document.querySelector('.user-steps-today');
const stairsAllAvg = document.querySelector('.stairs-all-avg');
const userStairsToday = document.querySelector('.user-stairs-today');
const minutesAllAvg = document.querySelector('.minutes-all-avg');
const userMinutesToday = document.querySelector('.user-minutes-today');
const weeklySteps = document.querySelector('.weekly-steps');
const weeklyStairs = document.querySelector('.weekly-stairs');
const weeklyMinutes = document.querySelector('.weekly-minutes-active');

const userProfile = usersRepository.returnUserData(randomID);

window.addEventListener('load', function() {
  displayUserInfo();
  displayUserGreeting();
  displayWaterToday(currentUser.user.id, mostRecentDay(hydrationData));
  displayDailyHrsSlept(currentUser.user.id, mostRecentDay(sleepData));
  displayDailySleepQuality(currentUser.user.id, mostRecentDay(sleepData));
  displayAvgSleepQuality(currentUser.user.id);
  displayAvgHrsSlept(currentUser.user.id);
  displayDailySteps(currentUser.user.id, mostRecentDay(activityData));
  displayDailyActiveMinues(currentUser.user.id, mostRecentDay(activityData));
  displayDailyDistanceWalked(currentUser.user.id, mostRecentDay(activityData));
  displayWeeklySteps(currentUser.user.id, mostRecentDay(activityData));
  displayWeeklyStairs(currentUser.user.id, mostRecentDay(activityData));
  displayWeeklyMinutes(currentUser.user.id, mostRecentDay(activityData));
  displayStepsAllAvg(currentUser.user.id, mostRecentDay(activityData));
  displayStairsAllAvg(currentUser.user.id, mostRecentDay(activityData));
  displayUserStairsToday(currentUser.user.id, mostRecentDay(activityData));
  displayMinutesAllAvg(currentUser.user.id, mostRecentDay(activityData));
});

function displayUserInfo() {
  userStrideLength.innerText = `Your Stride Length: ${userProfile.strideLength} ft`;
  userDailyStepGoal.innerText = `Your Daily Step Goal: ${userProfile.dailyStepGoal}`;
  allDailyStepGoal.innerText = `Avg User Daily Step Goal: ${usersRepository.getAverageStepGoal()}`;
}

function mostRecentDay(dataSet) {
  let obj = dataSet[dataSet.length - 1];
  return obj.date;
}

function displayUserGreeting() {
  userGreeting.innerText = `Hi   ${currentUser.getFirstName()}!`;
}

function displayWaterToday(id, date) {
  fluidOzToday.innerText = hydration.fluidOuncesOnDay(id, date)
}

function displayDailyHrsSlept(id, date) {
  dailyHrsSlept.innerText =  sleep.dailyHoursSlept(id, date);
}

function displayDailySleepQuality(id, date) {
  dailySleepQuality.innerText = sleep.dailySleepQuality(id, date);
}

function displayAvgSleepQuality(id) {
  allTimeAvgSleepQuality.innerText = sleep.userAvgSleepQuality(id);
}

function displayAvgHrsSlept(id) {
  allTimeAvgSleepHrs.innerText = sleep.averageSleepDay(id);
}

function displayDailySteps(id, date) {
  userStepsToday.innerText = activity.getStepsOnDay(id, date);
}

function displayDailyActiveMinues(id, date) {
  userMinutesToday.innerText = activity.getUserMinutes(id, date);
}

function displayDailyDistanceWalked(id, date) {
  distanceWalked.innerText = activity.getUserMilesWalked(id, date);
}

function displayWeeklySteps(id, date) {
  weeklySteps.innerText = activity.getUserWeeklySteps(id, date);
}

function displayWeeklyStairs(id, date) {
  weeklyStairs.innerText = activity.getUserWeeklyStairs(id, date);
}

function displayWeeklyMinutes(id, date) {
  weeklyMinutes.innerText = activity.getUserWeeklyMinutes(id, date);
}

function displayStepsAllAvg(id, date) {
  stepsAllAvg.innerText = activity.avgStepsByDate(date);
}

function displayStairsAllAvg(id, date) {
  stairsAllAvg.innerText =  activity.avgStairsByDate(date);
}

function displayUserStairsToday(id, date) {
  userStairsToday.innerText = activity.getStairsOnDay(id, date);
}

function displayMinutesAllAvg(id, date) {
  minutesAllAvg.innerText = activity.avgMinutesByDate(date);
}

new Chart(waterChart, {
  type: 'bar',
  data: {
    labels: hydration.getMostRecentWeek(),
    datasets: [ {
      data: hydration.fluidOuncesWeek(currentUser.user.id),
      backgroundColor: [
        'rgb(168, 255, 229)',
        'rgb(255, 216, 171)',
        'rgb(150, 243, 255)',
        'rgb(255, 172, 171)',
        'rgb(250, 186, 255)',
        'rgb(211, 255, 176)',
        'rgb(255, 252, 172)'
      ]
    }],
  },
  options: {
    legend: {
      display: false
    }
  }
})

new Chart(weeklySleepChart, {
  type: 'bar',
  data: {
    labels: sleep.getMostRecentWeek(),
    datasets: [ {
      data: sleep.dailySleepPerWeek(currentUser.user.id, mostRecentDay(sleepData)),
      backgroundColor: [
        'rgb(168, 255, 229)',
        'rgb(255, 216, 171)',
        'rgb(150, 243, 255)',
        'rgb(255, 172, 171)',
        'rgb(250, 186, 255)',
        'rgb(211, 255, 176)',
        'rgb(255, 252, 172)'
      ]
    }],
  },
  options: {
    legend: {
      display: false
    }
  }
})

new Chart(weeklySleepQualityChart, {
  type: 'bar',
  data: {
    labels: sleep.getMostRecentWeek(),
    datasets: [ {
      data: sleep.sleepQualityPerWeek(currentUser.user.id, mostRecentDay(sleepData)),
      backgroundColor: [
        'rgb(168, 255, 229)',
        'rgb(255, 216, 171)',
        'rgb(150, 243, 255)',
        'rgb(255, 172, 171)',
        'rgb(250, 186, 255)',
        'rgb(211, 255, 176)',
        'rgb(255, 252, 172)'
      ]
    }],
  },
  options: {
    legend: {
      display: false
    }
  }
})
