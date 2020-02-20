//global variables
const userName = document.querySelector('#name');
const otherJobRole = document.querySelector('#other-title');
const tShirttheme = document.querySelector('#design');
const tShirtThemeElements = document.querySelectorAll('#design option');
const tShirtColor = document.querySelector('#color');
const tShirtColorElements = document.querySelectorAll('#color option');

const option = document.createElement('option');


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
