function validateName() {
  let fullName = document.getElementById("name").value;
  let nameError = document.getElementById("nameError");
  let nameRegex = /^[A-Z][a-z]{2,19}(?:\s[A-Z][a-z]{2,19})?(?:\s[A-Z][a-z]{2,19})?$/;

  if (fullName === "") 
  {
    nameError.innerHTML = "Full name cannot be empty";
  } else if (fullName.length < 5 || fullName.length > 40) 
  {
    nameError.innerHTML = "Full name requires at least 5 and at most 40 characters";
  } else if (!nameRegex.test(fullName)) 
  {
    nameError.innerHTML = "Invalid format !! First letter of first and last name require Uppercase";
  } else {
    nameError.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{1,3}$/;

  if (emailRegex.test(emailInput.value) && emailInput.value.length <= 25)
   {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "Invalid email address";
    return false;
  }
}

function validatePhoneNumber() {
  let phoneNumberInput = document.getElementById("phoneNumber");
  let phoneError = document.getElementById("phoneError");
  let phoneRegex = /^[6-9]\d{9}$/;

  if (phoneRegex.test(phoneNumberInput.value))
   {
    phoneError.innerHTML = "";
    return true;
  } else {
    phoneError.innerHTML = "Invalid phone number. Please enter 10 digits.";
    return false;
  }
}

function validateDOB() {
  let dobInput = document.getElementById("dob");
  let dobError = document.getElementById("dobError");
  let todayDate = new Date();
  let preDate = new Date();
  preDate.setFullYear(todayDate.getFullYear() - 100);
  let selectedDate = new Date(dobInput.value);

  if (selectedDate > todayDate) {
    dobError.innerHTML =
      "Date of Birth should be less than or equal to today's date.";
    return false;
  } else if (selectedDate < preDate) {
    dobError.innerHTML =
      "Date of Birth should be not be more than 100 years ago";
    return false;
  } else {
    dobError.innerHTML = "";
    return true;
  }
}

function validateAddress() {
  let address = document.getElementById("address").value;

  if (address == "") 
  {
    document.getElementById("addressError").innerHTML = "";
    return true;
  } else if (address.length < 10 || address.length > 100) 
  {
    document.getElementById("addressError").innerHTML = "Address requires atleast 10 characters and atmost 100 charcter";
    return false;
  }
  else {  document.getElementById("addressError").innerHTML = "";
           return true;
  }
}

function validatePassword() {
  let passwordInput = document.getElementById("password");
  let passwordError = document.getElementById("passwordError");
  let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
  if (passwordRegex.test(passwordInput.value)) 
  {
    passwordError.innerHTML = "";
    return true;
  } 
 // else if (passwordInput.length < 5) 
  // {
  //   passwordError.innerHTML = "Password atleast require 5 ";
 // }
   else {  
  
    passwordError.innerHTML =
      "Password must have one uppercase letter, one number, one special character, and be at least 8 characters long.";
    return false;
  }
}

function validateConfirmPassword() {
  let passwordInput = document.getElementById("password"); 
  let confirmPasswordInput = document.getElementById("confirmPassword");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let cpasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordInput.value === confirmPasswordInput.value && cpasswordRegex.test(passwordInput.value)) 
  {
    confirmPasswordError.innerHTML = "";
    return true;
  } else {
    confirmPasswordError.innerHTML = "Passwords do not match.";
    return false;
  }
}

function validateGender() {
  let genderError = document.getElementById("genderError");
  let genderMan = document.getElementById("check-male");
  let genderWomen = document.getElementById("check-female");

  if (!genderMan.checked && !genderWomen.checked) 
  {
    genderError.innerHTML = "Please select your gender";
    return false;
  } else {
    genderError.innerHTML = "";
    return true;
  }
}

function buttonEnableDisable() {
  let f = document.getElementById("signupForm");
  let allFilled = true;

  for (let i = 0; i < f.length; i++) {
    if (f[i].id !== "address" && f[i].value.length == 0) allFilled = false;
  }

  if (allFilled && validateAddress() && validateEmail() && validateName() && validatePhoneNumber() && validateDOB() 
                        && validatePassword() && validateConfirmPassword() && validateGender() ) 
  {
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }
}
function submitSuccess() { 
  alert("Form Submitted Successfully");
  let form = document.getElementById("signupForm");
  form.reset();
}
