function renderComponents(elements){

  // loop through this array list elements
  for (let element of elements) {
    // get the specific attributes that we stored the path to the component/module in
    const dataImport = element.getAttribute("data-import");
    
    fetch(dataImport)
      .then((res) => {
          if(!res.ok){
              throw "Not found"
          }
        return res.text();
      })
      .then((component) => {
        element.innerHTML = component;
        loadComponentScripts(element)
        const subComponents = element.querySelectorAll("[data-import]");
        renderComponents(subComponents)
      })
      .catch(() => {
        element.innerHTML = `<h4>Component not found</h4>`;
      });
  }
}
const componentElements = document.querySelectorAll("[data-import]");
renderComponents(componentElements)

function loadComponentScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        element.appendChild(newScript)
    }
}



const pass = document.getElementById("password");

const email = document.getElementById("email");



const passError = document.getElementById("passError");

const emailError = document.getElementById("emailError");



const form = document.getElementById("form")




// Regex validators
// const usernameRegex = /^[A-Za-z0-9]{6}$/;

// const passwordRegex = /^[A-Za-z0-9_\W]{8,}$/;

// const emailRegex = /^[A-Za-z0-9/./-_]+[@][a-z_.]{2,}[\.][a-z]{2,}$/;



// const eHandler = (e) => {
//   e?.preventDefault();

//  pass.type = pass.type == "password" ? "text" : "password";
//   toggle.classList.toggle("fa-eye-slash");
// };

// toggle.addEventListener("click", eHandler);



/*  Clear previous errors */
 
 
  passError.textContent = '';
  emailError.textContent = '';
 
  pass.classList.remove('invalid');
  email.classList.remove("invalid");


  function validateInputs() {
    
    const password = pass.value.trim();
    const mail = email.value.trim();

    // Define setError and setSuccess
    const setError = (input, message) => {
       if (input === pass) {
        passError.textContent = message;
      } else if (input === email) {
        emailError.textContent = message;
      }

      input.classList.add("invalid");
    };

    const setSuccess = (input) => {
      if (input === pass) {
        passError.textContent = "";
      } else if (input === email) {
        emailError.textContent = "";
      }

      input.classList.remove("invalid");
    };

 
    // Validate password
    if (validator.isEmpty(password)) {
      setError(pass, "Password is required");
    } else if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError(pass, "Password must be at least 8 characters, at least 1 uppercase, 1 lowercase,1 number and special character");
    } else {
      setSuccess(pass);
    }

    if(validator.isEmpty(mail)){
      setError(email, "Email is required")
    }else if(!validator.isEmail(mail)){
      setError(email, "Please enter a valid email address")
    }else{
      setSuccess(email)
    }

    // // Username Validation
    // if (username === "") {
    //   setError(uname, "Username is required");
    // } else if (!usernameRegex.test(username)) {
    //   setError(uname, "Username must be at least 6 alphanumeric characters");
    // } else {
    //   setSuccess(uname);
    // }

    // // Password Validation
    // if (password === "") {
    //   setError(pass, "Password is required");
    // } else if (!passwordRegex.test(password)) {
    //   setError(
    //     pass,
    //     "Password must be 8+ chars, with upper, lower, number & symbol"
    //   );
    // } else {
    //   setSuccess(pass);
    // }

    // // Email Validation
    // if (mail === "") {
    //   setError(email, "Email is required");
    // } else if (!emailRegex.test(mail)) {
    //   setError(email, "Please enter a valid email address");
    // } else {
    //   setSuccess(email);
    // }
  }

  

  
    
     email.addEventListener("input", validateInputs);
     pass.addEventListener("input", validateInputs);


    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInputs();

      if (!document.querySelector(".invalid")) {
        alert("details successfully submitted");
      }
    });