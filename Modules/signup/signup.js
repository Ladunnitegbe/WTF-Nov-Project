// 



const signupEmail = document.querySelector('#email');
const signupPassword = document.querySelector('#password');
const signupButton = document.querySelector('.gold_button');
const signupName = document.querySelector('#full_name');
const signupForm =document.getElementById('signupform');
const logInTab = document.getElementById('login')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

let savedInfo;

const nameValidator = /^[A-Za-z]+( [A-Za-z]+)+$/;
const emailValidator = /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z]+\.[A-Za-z]{2,}$/;
const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


signupButton.addEventListener('click', (e) => {
    e.preventDefault();

    let nameTest = nameValidator.test(signupName.value.trim());
    let emailTest = emailValidator.test(signupEmail.value.trim());
    let passwordTest = passwordValidator.test(signupPassword.value.trim());

    if (nameTest && emailTest && passwordTest) {
        console.log('proceed');

        savedInfo = {
            Email: signupEmail.value.trim(),
            Password: signupPassword.value.trim(),
            Name: signupName.value.trim()
        };

        localStorage.setItem('userInfo', JSON.stringify(savedInfo));
// go to login
        window.location.href = "/main.html";
    }

    else if(!nameTest && emailTest && passwordTest){

     console.log('enter valid name');

    } else if (nameTest && !emailTest && passwordTest) {
        console.log('enter valid email');
    } else if (nameTest && emailTest && !passwordTest) {
        console.log('enter valid password');
    } else {
        console.log('enter valid name, password and email');

    }

    
});

// logInTab.addEventListener('click',()=>{
//     window.location.reload();


loginTab.addEventListener('click', (e)=>{
   
    
    const link = "/Modules/login/login.html";
    
    fetch(link).then((res)=>{

        return res.text();

    }).then((component)=>{
       removableImport.remove();
        replacable.innerHTML = component;
        loadScripts(replacable);


        
    }).catch(()=>{
        replacable.innerHTML= '<h2>There are nothing in the page<h2>';
    });
});

function loadScripts(element){
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
        
        document.body.appendChild(newScript)
    }

}

