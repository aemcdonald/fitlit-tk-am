const usersRepository = new UsersRepository(userData);
const user = new User(userData);
const hydration = new Hydration(hydrationData);
const sleep = new Sleep(sleepData);
const activity = new Activity(activityData, sleepData);

const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');
const userName = document.querySelector('.user-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const userStrideLength = document.querySelector('.user-strideLength');
const userDailyStepGoal = document.querySelector('.user-dailyStepGoal');
const userFriends = document.querySelector('.user-friends');


let randomID = Math.floor(Math.random() * (50 - 1) + 1);
const userProfile = usersRepository.returnUserData(randomID);


window.addEventListener('onload', displayUserInfo());

function displayUserInfo() { //need to call this onload
  userName.innerText = userProfile.name
  userAddress.innerText = userProfile.address
  userEmail.innerText = userProfile.email
  userStrideLength.innerText = userProfile.strideLength
  userDailyStepGoal.innerText = userProfile.strideLength
  userDailyStepGoal.innerText = userProfile.dailyStepGoal
  userFriends.innerText = userProfile.friends
};
