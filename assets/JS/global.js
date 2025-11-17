
const moduleImport = document.querySelectorAll('[data-import]');

 
for (let element of moduleImport){
    const link = element.getAttribute('data-import');
   
    fetch(link).then((res)=>{
 
        return res.text();
 
    }).then((component)=>{
       
     
        element.innerHTML = component;
        loadScripts(element);
 
    }).catch(()=>{
        element.innerHTML= '<h2>There are nothing in the page<h2>';
    });
}
 
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
 
// loginTab.addEventListener('click', ()=>{
//     login.computedStyleMap.display = 'block';
//     signup.computedStyleMap.display = 'none';
// })
 
// signup.addEventListener('click', ()=>{
//     login.computedStyleMap.display = 'none';
//     location.href("./module/signup/signup.html");
// })
 
login
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const bottom = document.querySelector('.next-btn');
 
let storedInfo = JSON.parse(localStorage.getItem('userInfo'));
 
bottom.addEventListener('click', ()=>{
    if(email.value === storedInfo.Email && password.value === storedInfo.Password){
        return true
    } else {
        console.log ('please inter right information');
    }
})
 
const replacable = document.querySelector('.replacable-content');
const signUp = document.querySelector('.signup-btn');
const removableLogin = document.querySelector('.log-div');
const login = document.querySelector('.login-btn');
 
 
signUp.addEventListener('click', (e)=>{
   
   
    const link = "/module/signup/signup.html";
   
    fetch(link).then((res)=>{
 
        return res.text();
 
    }).then((component)=>{
        removableLogin.remove();
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
 
 
 
login.addEventListener('click', ()=>{
    location.reload();
})
 