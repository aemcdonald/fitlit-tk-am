let randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1);

const usersRepository = new UsersRepository(userData);
const currentUser = new User(userData[randomIndex]);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(sleepData);
const activity = new Activity(activityData, sleepData);
const randomID = randomIndex + 1;

const waterChart = document.getElementById('water-chart').getContext('2d');
const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');
const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStrideLength = document.querySelector('.user-strideLength');
const userDailyStepGoal = document.querySelector('.user-dailyStepGoal');
const userFriends = document.querySelector('.user-friends');
const fluidOzToday = document.querySelector('.fluid-oz-today');

const dailyHrsSlept = document.querySelector('.hours-slept-day');
const dailySleepQuality = document.querySelector('.sleep-quality-day');
const weeklyHrsSlept = document.querySelector('.hours-slept-week');
const weeklySleepQuality = document.querySelector('.sleep-quality-week')
const allTimeAvgSleepHrs = document.querySelector('.avg-hours-sleep');
const allTimeAvgSleepQuality = document.querySelector('.avg-sleep-quality')

const userProfile = usersRepository.returnUserData(randomID);


window.addEventListener('load', function() {
  displayUserInfo();
  displayUserGreeting();
  displayWaterToday(currentUser.user.id, mostRecentDay(hydrationData));
  displayDailyHrsSlept(currentUser.user.id, mostRecentDay(sleepData));
  displayDailySleepQuality(currentUser.user.id, mostRecentDay(sleepData));
});

//refactor
function displayUserInfo() { //need to call this onload
  userName.innerText = `Name: ${userProfile.name}`;
  userAddress.innerText = `Address: ${userProfile.address}`;
  userEmail.innerText = `Email: ${userProfile.email}`;
  userStrideLength.innerText = `Your Stride Length: ${userProfile.strideLength}`;
  userDailyStepGoal.innerText = `Your Daily Step Goal: ${userProfile.dailyStepGoal}, the average step goal for all users is ${usersRepository.getAverageStepGoal()}.`

  userFriends.innerText = `Friends: ${userProfile.friends}`;// display names, not ids.
};

function mostRecentDay(dataSet) {
  let obj = dataSet[dataSet.length - 1];
  return obj.date;
};

function mostRecentWeek(dataSet) {

}

function displayUserGreeting() {
  userGreeting.innerText = `Hi, ${currentUser.getFirstName()}!`;
};

function displayWaterToday(id, date) {
  fluidOzToday.innerText = `You have consumed ${hydration.fluidOuncesOnDay(id, date)} ounces today.`
};

function displayDailyHrsSlept(id, date) {
  dailyHrsSlept.innerText = `Your hours slept today: ${sleep.dailyHoursSlept(id, date)} hours.`;
}

function displayDailySleepQuality(id, date) {
  dailySleepQuality.innerText = `Your sleep quality today: ${sleep.dailySleepQuality(id, date)}`;
}

let waterGraph = new Chart(waterChart, {
  type: 'bar',
  data: {
    labels: hydration.getMostRecentWeek(),
    datasets: [ {
      data: hydration.fluidOuncesWeek(currentUser.user.id),
      backgroundColor: []
    }],
  },
})
