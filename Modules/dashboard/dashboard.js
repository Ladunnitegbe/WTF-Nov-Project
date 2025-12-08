const title = document.querySelector('.dashboard_title');

let gettitle = JSON.parse(localStorage.getItem('userInfo'));
title.innerHTML = `Good evening, ${gettitle.Name}!`;

const changeContent = document.querySelectorAll('.change_content');

const card = [
    { title: "Total Expenses", image: "/Components/task_card/task_images/dollar sign.svg", alt: 'dollar icon', amount: "$0.0", comment: "This period" },
    { title: "Total Notes", image: "/Components/task_card/task_images/file sign.svg", alt: 'file icon', amount: "0", comment: "Saved Notes" },
    { title: "Complection Rate", image: "/Components/task_card/task_images/progress-arrow icon.svg", alt: 'progress arrow icon', amount: "0%", comment: "Task Complection" },
];

changeContent.forEach((ele, i) => {
    const cardTitle = ele.querySelector('.task_card___content_title');
    const cardImage = ele.querySelector('.task_card___img_container img'); 
    const cardAmount = ele.querySelector('.task_card___amount_num');
    const cardComment = ele.querySelector('.task_card___amount_comment');

  
    cardTitle.textContent = card[i].title;
    cardImage.src = card[i].image;
    cardImage.alt = card[i].alt;
    cardAmount.textContent = card[i].amount;
    cardComment.textContent = card[i].comment;
});