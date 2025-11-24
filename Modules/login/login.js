// 


const loginEmail = document.querySelector('.login_email');
const loginPassword = document.querySelector('.password');
const loginButton = document.querySelector('.nextStep');
const loginForm = document.getElementById('loginform');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

})

let storedInfo = JSON.parse(localStorage.getItem('userInfo'));

loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(loginEmail.value === storedInfo.Email && loginPassword.value === storedInfo.Password){
      window.location.href ="/WTF-Nov-Project/Modules/dashboard/dashboard.html"
    } else {
        console.log ('please enter right information');
    }
})

const replacable = document.querySelector('.replacable-content');
const signUpBtn = document.querySelector('.signup-btn');
const removableImport = document.querySelector('.log-div');
const login = document.querySelector('.login-btn');


signUpBtn.addEventListener('click', (e)=>{
   
    
    const link = "/WTF-Nov-Project/Modules/signup/signup.html";
    
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