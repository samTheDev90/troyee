'use strict';
const entirePage = document.querySelector('.entire-page') ;
const input = document.querySelector('.js-main-input');
const loginPage = document.querySelector('.js-login-page');
const happyBirtdayPage = document.querySelector('.birthday-card');
const birthdayDisplay = happyBirtdayPage.style;
function troyee(){
  if (input.value === 'troyee'|| input.value === 'TROYEE' || input.value ===  'Troyee' ||input.value ===  'Troyee'+' ' ||input.value ===  'Toyee'+' ' ||input.value ===  'Toyee'||input.value ===  'toyee'||input.value ===  'TOYEE'){
   birthdayDisplay.display="block";
    loginPage.style.display="none";
    setTimeout(function(){
      entirePage.style.display="block";
      birthdayDisplay.display="none";
    },3000);
   
  }
  else{alert('You Do not have access')}
};
const buttonElement = document.querySelector('.js-enter-btn');
buttonElement.addEventListener('click', troyee);
document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    troyee();
  }
});



