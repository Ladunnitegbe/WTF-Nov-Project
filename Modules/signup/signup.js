const full_name = document.getElementById("full_name");

const password = document.getElementById("password");

const email = document.getElementById("email");

const nameError = document.getElementById("nameError");

const passError = document.getElementById("passError");

const emailError = document.getElementById("emailError");

// let toggle = document.getElementById("toggle");

const form = document.getElementById("form")




/*  Clear previous errors */
 
  nameError.textContent = '';
  passError.textContent = '';
  emailError.textContent = '';
  full_name.classList.remove('invalid');
  password.classList.remove('invalid');
  email.classList.remove("invalid");


  function validateInputs() {
    const username = full_name.value.trim();
    const pass = password.value.trim();
    const mail = email.value.trim();

    // Define setError and setSuccess
    const setError = (input, message) => {
      if (input === full_name) {
        nameError.textContent = message;
      } else if (input === password) {
        passError.textContent = message;
      } else if (input === email) {
        emailError.textContent = message;
      }

      input.classList.add("invalid");
    };

    const setSuccess = (input) => {
      if (input === full_name) {
        nameError.textContent = "";
      } else if (input === password) {
        passError.textContent = "";
      } else if (input === email) {
        emailError.textContent = "";
      }

      input.classList.remove("invalid");
    };

    // Validate username
    // *****************************************************************************
    if (validator.isEmpty(username)) {
      setError(full_name, "Please fill out this field");
    } else if (!validator.isAlphanumeric(username)) {
      setError(full_name, "Username must be alphanumeric");
    } else if (!validator.isLength(username, { min: 6 })) {
      setError(full_name, "Username must be at least 6 characters");
    } else {
      setSuccess(full_name);
    }

    // Validate password
    if (validator.isEmpty(pass)) {
      setError(password, "Password is required");
    } else if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(password, "Password must be at least 8 characters, at least 1 uppercase, 1 lowercase,1 number and special character");
    } else {
      setSuccess(password);
    }

    if(validator.isEmpty(mail)){
      setError(email, "Please fill out this field")
    }else if(!validator.isEmail(mail)){
      setError(email, "Please enter a valid email address")
    }else{
      setSuccess(email)
    }

  }
    full_name.addEventListener("input", validateInputs);
    email.addEventListener("input", validateInputs);
    password.addEventListener("input", validateInputs);


    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();

     if (!document.querySelector(".invalid")) {
        alert("details successfully submitted");
      }
    });
  

