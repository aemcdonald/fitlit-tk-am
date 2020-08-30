let randomIndex = Math.floor(Math.random() * (userData.length - 1) + 1);

const usersRepository = new UsersRepository(userData);
const user = new User(userData[randomIndex]);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(sleepData);
const activity = new Activity(activityData, sleepData);
const randomID = randomIndex + 1;

const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');
const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStrideLength = document.querySelector('.user-strideLength');
const userDailyStepGoal = document.querySelector('.user-dailyStepGoal');
const userFriends = document.querySelector('.user-friends');

const userProfile = usersRepository.returnUserData(randomID);

window.addEventListener('load', function() {
  displayUserInfo();
  displayUserGreeting();
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

function displayUserGreeting() {
  userGreeting.innerText = `Hi, ${user.getFirstName()}!`;
};
