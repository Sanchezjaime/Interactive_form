//global variables
const userName = document.getElementById('name');
const otherJobRole = document.getElementById('other-title');
const tShirttheme = document.getElementById('design')
//basic info
//sets focus to the first text field on page upload
window.onload = function () {
  userName.focus();
}

//hides "other" job role input
otherJobRole.style.display = 'none';

//T-shirt
