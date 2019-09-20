/** 
 * Comments
* !  Alert
* ? Question
* * Important
* TODO: 
*
**/

/*

TODO:   Grab the elements:
TODO:     - 3 fields and button

TODO:   Add event to button 

*/

/*
!                   '==' VS. '==='
    == doesn't check datatypes so "12" == 12 would return true
      === checks dataypes
* WE WILL ALWAYS USE '===' 
*/



const fakeUser = 'Emlay9';
const fakePassword = '123456';

const cardNumber = document.querySelector("#card-number");
const username = document.querySelector("#username");
const passsword = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");


submitBtn.addEventListener('click', function(){
// trim removes the whitespace
  const user = (username.value).trim();

  if(fakeUser === user) {
    console.log("user name is " + user);
  } else {
    console.log("send an error message");
  }
});