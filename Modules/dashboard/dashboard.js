const title = document.querySelector('.dashboard-title');

let gettitle = JSON.parse(localStorage.getItem('userInfo'));
title.innerHTML = `Good evening, ${gettitle.Name}!`;

const changeContent = document.querySelectorAll('.change-content');

const card = [
    { title: "Total Expenses", image: "/components/card/images/dollar-icon.svg", Alt: 'dollar icon', amount: "$0.0", comment: "This period" },
    { title: "Total Notes", image: "/components/card/images/file-icon.svg", Alt: 'file icon', amount: "0", comment: "Saved Notes" },
    { title: "Complection Rate", image: "/components/card/images/progress-arrow.svg", Alt: 'progress arrow icon', amount: "0%", comment: "Task Complection" },
];

changeContent.forEach((ele, i) => {
    const cardTitle = ele.querySelector('.card-title');
    const cardImage = ele.querySelector('.img-conatainer img'); 
    const cardAmount = ele.querySelector('.amount-num');
    const cardComment = ele.querySelector('.amount-comment');

  
    cardTitle.textContent = card[i].title;
    cardImage.src = card[i].image;
    cardImage.alt = card[i].alt;
    cardAmount.textContent = card[i].amount;
    cardComment.textContent = card[i].comment;
});