'use strict';
const entirePage = document.querySelector('.entire-page') ;
const input = document.querySelector('.js-main-input');
const loginPage = document.querySelector('.js-login-page');

function troyee(){
  if (input.value === 'troyee'|| input.value === 'TROYEE' || input.value ===  'Troyee'){
    entirePage.style.display="block";
    loginPage.style.display="none";
   
  }
  else{alert('You Do not have access')}
};