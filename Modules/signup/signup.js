// 



const signupEmail = document.querySelector('#email');
const signupPassword = document.querySelector('#password');
const signupButton = document.querySelector('.gold_button');
const signupName = document.querySelector('#full_name');
const signupForm =document.getElementById('signupform');
const logInTab = document.querySelector('#login')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

let savedInfo;

const nameValidator =  /^[a-zA-Z0-9_]{3,16}$/;
const emailValidator = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z]+\.[A-Za-z]{2,}$/g;
const passwordValidator = /[a-zA-Z0-9]{6,}/g; /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

signupButton.addEventListener('click', (e) => {
    e.preventDefault();

    let nameTest = nameValidator.test(signupName.value);
    let emailTest = emailValidator.test(signupEmail.value);
    let passwordTest = passwordValidator.test(signupPassword.value);

    if (nameTest && emailTest && passwordTest) {
        console.log('proceed');

        savedInfo = {
            Email: signupEmail.value,
            Password: signupPassword.value,
            Name: signupName.value

        }

        localStorage.setItem('userInfo', JSON.stringify(savedInfo));
        signupButton.addEventListener('click',()=>{
            window.location.href = "/WTF-Nov-Project/index.html";
        })

    } else if (emailTest && !passwordTest) {
        console.log('enter valid email');
    } else if (!emailTest && passwordTest) {
        console.log('enter valid password');
    } else {
        console.log('enter valid password and email');

    }

    
});

logInTab.addEventListener('click',()=>{
    window.location.reload();
})