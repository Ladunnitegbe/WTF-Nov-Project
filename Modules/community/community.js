
const communityUserLetter = document.querySelectorAll('.community-AI_letter');
const postButtom = document.querySelector('.community-post-btn');
const userQuestion = document.getElementById('community_ask-ai');
const aiAnswer = document.querySelector('.community-ai_answer');

let getFirstLetter = JSON.parse(localStorage.getItem('userInfo'));
communityUserLetter.forEach((name)=>{
    name.innerHTML = getFirstLetter.Name[0];
})

let questions = {question: userQuestion.value};

userQuestion.addEventListener('input', ()=>{
    
   if(userQuestion.value.length > 0){
        postButtom.style.backgroundColor = "#4E8EF6";
    } else {
        postButtom.style.backgroundColor = "#9DC0FA";
    }
})
