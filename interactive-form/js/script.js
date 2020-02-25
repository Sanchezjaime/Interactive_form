//global variables
const userName = document.querySelector('#name');
const otherJobRole = document.querySelector('#other-title');
const tShirttheme = document.querySelector('#design');
const tShirtThemeElements = document.querySelectorAll('#design option');
const tShirtColor = document.querySelector('#color');
const tShirtColorElements = document.querySelectorAll('#color option');
const activitySection = document.querySelector('.activities');
const activities = document.querySelectorAll('.activities input');
const paymentmethod = document.querySelector('#payment');
const paymentOptions = document.querySelectorAll('#payment option');
let activityTotalCost = 0;


const option = document.createElement('option');
let activityCost = document.createElement('activityCost');




//basic info
//sets focus to the first text field on page upload
window.onload = function () {
  userName.focus();
}

//hides "other" job role input
otherJobRole.style.display = 'none';

//T-shirt
//hides "select theme" 'option' element in the 'design' menu
tShirtThemeElements[0].style.display = 'none';
//updates color field to read 'please select t-shirt theme'
option.text = 'Please select a T-shirt theme';
tShirtColor.add(option, tShirtColor[0]);
option.selected = true;

//hides the colors in the 'color' drop down menu
const hideColors = () => {
  const tShirtColorElements = document.querySelectorAll('#color option');
  for (let i = 0; i < tShirtColorElements.length; i++){
    tShirtColorElements[i].style.display = 'none';
  }
};
//changes the color field element to show the appropiate color for the tshirt Theme
tShirttheme.addEventListener('change', (e) => {
  hideColors();
  if(event.target.value === 'js puns'){
    tShirtColorElements[0].selected = true;
    for(let i = 0; i < tShirtColorElements.length; i++){
      if(i >= 3){
        tShirtColorElements[i].style.display = 'none';
      } else {
        tShirtColorElements[i].style.display = 'block';
      }
    }
  }if(event.target.value === 'heart js'){
    tShirtColorElements[3].selected = true;
    for(let i = 0; i < tShirtColorElements.length; i++){
      if(i <= 2){
        tShirtColorElements[i].style.display = 'none';
      } else {
        tShirtColorElements[i].style.display = 'block';
      }
    }
  }
});

//activity Section
//creates an element to display total activity cost
activityCost.innerHTML = 'Total Cost';
activitySection.appendChild(activityCost);
//change event listener for activity Section
activitySection.addEventListener('change', (e) => {
  let target = event.target;
  //gets the data-cost attribute value and changes data-cost string into a interger
  let cost = parseInt(target.getAttribute('data-cost'), 10);
  console.log(target);
  console.log(cost);
  console.log(typeof cost);
  //gets the data-day-and-time getAttribute value
  let activityDateAndTime = target.getAttribute('data-day-and-time');
  console.log(activityDateAndTime);
  console.log(typeof activityDateAndTime);
  //for loop iterates checkbox inputs
  for(let i = 0; i < activities.length; i++){
    let activityTimes = activities[i].getAttribute('data-day-and-time');
    console.log(activityTimes);
    //checks for conflicting dates and times disables if conflicting
    if(activityTimes === activityDateAndTime && target !== activities[i]){
      if(target.checked){
        activities[i].disabled = true;
        } else {
          activities[i].disabled = false;
      }
    }
  }
  //adds and subtracts total costs
  if(target.checked){
    activityTotalCost = activityTotalCost += cost;
    console.log(activityTotalCost);
  } else {
      activityTotalCost = activityTotalCost -= cost;
      console.log(activityTotalCost);
  }
  activityCost.innerHTML = 'Total: $' + activityTotalCost;
})


//payment Section
//hide the select payment payment payment option
paymentOptions[0].style.display = 'none';
//initially displays the credit card payment option
paymentOptions[1].selected = true;
