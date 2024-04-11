const username = document.getElementById('username');
const firstname = document.getElementById('fname');
const middlename = document.getElementById('mname');
const lastname = document.getElementById('lname');
const completeaddress = document.getElementById('address');
const birthdate = document.getElementById('birthdate');
const mobile = document.getElementById('mobile');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  let isValid = true; 

  const userName = username.value.trim();
  const firstName = firstname.value.trim();
  const middleName = middlename.value.trim();
  const lastName = lastname.value.trim();
  const userAddress = address.value.trim();
  const userBirthdate = birthdate.value;
  const userMobile = mobile.value.trim();


  if (!userName) {
    alert('Please enter a username');
    isValid = false;
  } else if (!/^[a-zA-Z0-9\s]{4,12}$/.test(userName)) {
    alert('Username must be alphanumeric and have a length between 4-12 characters');
    isValid = false;
  } else {
    alert('Your username is valid');
    isValid = true;
  }

  
  if (!firstName) {
    alert('Please enter your first name');
    isValid = false;
  } else if (!/^[\D]{1,99}$/.test(fname)) {
    alert("First name must be characters only and no white space characters.");
    isValid = false;
  } else {
    alert('Your first name is valid');
    isValid = true;
  }

  if (!middleName) {
    alert("Middle name is not required");
    isValid = true;
  } else if (!/^[\D]{0,99}$/.test(mname)) {
    alert('Middle name must be characters only');
    isValid = false;
  } else {
    alert("Your middle name is valid");
    isValid = true;
  }

  if (!lastName) {
    alert('Please enter your last name');
    isValid = false;
  } else if (!/^[\D]{2,99}$/.test(lname)) {
    alert("Last name must be characters only.");
    isValid = false;  
  } else {
    alert("Your last name is valid");
  }
  
  if (!userAddress) {
    alert('Please enter your complete address');
    isValid = false;
  } else if (!/^[a-zA-Z0-9\s]+$/.test(userAddress)) {
    alert("Your complete address should not contain any special characters.");
    isValid = false;
  } else {
    alert("Your address is valid");
    isValid = true;
  }

  if (!userBirthdate) {
    alert('Please put your birthdate');
    isValid = false;
  } else {
    alert("Your birthdate is valid");
    isValid = true;
  }

  if (!userMobile) {
    alert('Please put your mobile number');
    isValid = false;
  } else if (!/^\d{11}$/.test(userMobile)) {
    alert("Your mobile number should not contain any characters and must have a length of 11 digits.");
    isValid = false;
  } else {
    alert("Your mobile no. is valid");
    isValid = true;
  }

  if (isValid) {
    console.log('Form is valid, you can submit it now');
  }
});