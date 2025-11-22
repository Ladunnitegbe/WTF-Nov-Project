//importing modules

// Returns all element descendants of node that match selectors ([data-import]).
// this returns an array like element that can be looped through

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


// loginTab.addEventListener('click', ()=>{
//     login.computedStyleMap.display = 'block';
//     signup.computedStyleMap.display = 'none';
// })
 
// signup.addEventListener('click', ()=>{
//     login.computedStyleMap.display = 'none';
//     location.href("./module/signup/signup.html");
// })
 
//login
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('.nextStep');
 
let storedInfo = JSON.parse(localStorage.getItem('userInfo'));
 
loginButton.addEventListener('click', ()=>{
    if(email.value === storedInfo.Email && password.value === storedInfo.Password){
        return true
    } else {
        console.log ('please enter right information');
    }
})
 
// const replacable = document.querySelector('.replacable-content');
// const signUp = document.querySelector('.signup-btn');
// const removableLogin = document.querySelector('.log-div');
// const login = document.querySelector('.login-btn');
 
 
// signUp.addEventListener('click', (e)=>{
   
   
//     const link = "/module/signup/signup.html";
   
//     fetch(link).then((res)=>{
 
//         return res.text();
 
//     }).then((component)=>{
//         removableLogin.remove();
//         replacable.innerHTML = component;
//         loadScripts(replacable);
 
 
       
//     }).catch(()=>{
//         replacable.innerHTML= '<h2>There are nothing in the page<h2>';
//     });
// });
 
// function loadScripts(element){
//     const scripts = element.querySelectorAll("script");
//     for (let script of scripts) {
//         const newScript = document.createElement('script');
//         if(script.src){
//             newScript.src = script.src;
//         }
//         if(script.textContent){
//             newScript.textContent = script.textContent;
//         }
//         script.remove()
       
//         document.body.appendChild(newScript)
//     }
 
// }
 
 
 
// login.addEventListener('click', ()=>{
//     location.reload();
// })
 