
const communityUserLetter = document.querySelectorAll('.community_ai_letter');
const postButton = document.querySelector('.community_post_btn');
const userQuestion = document.getElementById('community_ask-ai');
const aiAnswer = document.querySelector('.community_ai_answer');

let getFirstLetter = JSON.parse(localStorage.getItem('userInfo'));
communityUserLetter.forEach((name)=>{
    name.innerHTML = getFirstLetter.Name[0];
})

let questions = {question: userQuestion.value};

userQuestion.addEventListener('input', ()=>{
    
   if(userQuestion.value.length > 0){
        postButton.style.backgroundColor = "#4E8EF6";
    } else {
        postButton.style.backgroundColor = "#9DC0FA";
    }
})
