

const title = document.querySelector('.dashboard__title');
const changeContent = document.querySelectorAll('.change_content');
const cardOneAmount = document.querySelector('.task_card___amount_num');
const cardOneCompleted = document.querySelector('.task_card___amount_comment');
const cardFiveImge = document.querySelector('.card_five_image');
const cardFiveContent = document.querySelector('.card_five_p');
const recentLoaded = document.querySelector('.dashboard_recent_template');

let getTitle = JSON.parse(localStorage.getItem('userInfo'));
    title.innerHTML = `Good evening, ${getTitle.Name}!`;

let statContent = JSON.parse(localStorage.getItem('stats')) || { active: 0, completed: 0 };
cardOneAmount.textContent = statContent.active;
cardOneCompleted.textContent = statContent.completed + " Completed";

let createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];


const card = [
    { title: "Total Expenses", image: "/Components/task_card/task_images/dollar sign.svg", Alt: 'dollar icon', amount: "$0.0", comment: "This period" },
    { title: "Total Notes", image: "/Components/task_card/task_images/file sign.svg", Alt: 'file icon', amount: "0", comment: "Saved Notes" },
    { title: "Completion Rate", image: "/Components/task_card/task_images/progress-arrow icon.svg", Alt: 'progress arrow icon', amount: "0%", comment: "Task Completion" },
];


changeContent.forEach((ele, i) => {
    const cardTitle = ele.querySelector('.task_card___content_title');
    const cardImage = ele.querySelector('.task_card___img_container img');
    const cardAmount = ele.querySelector('.task_card___amount_num');
    const cardComment = ele.querySelector('.task_card___amount_comment');

    cardTitle.textContent = card[i].title;
    cardImage.src = card[i].image;
    cardImage.alt = card[i].Alt;
    cardAmount.textContent = card[i].amount;
    cardComment.textContent = card[i].comment;

  if (i === changeContent.length - 1) {
    let total = statContent.active + statContent.completed;
    let rate = total === 0 ? 0 : Math.floor((statContent.completed / total) * 100);
    cardAmount.textContent = rate + "%";
}

});

if (createdTasks.length > 0) {

    recentLoaded.innerHTML = "";
    const lastTask = createdTasks[createdTasks.length - 1];
    const taskTemplate = document.getElementById('tasks-template');
    const contentsOfTemp = taskTemplate.content.cloneNode(true);
    recentLoaded.appendChild(contentsOfTemp);

    const recentTitle = document.querySelector('.recent-task_title');
    const recentDate = document.querySelector('.recent-task_date');
    const recentLevel = document.querySelector('.recent-task_level');

    recentTitle.textContent = lastTask.title;
    recentDate.textContent = lastTask.date;
    recentLevel.textContent = lastTask.priority;

    cardFiveImge.style.display = "none";
    cardFiveContent.style.display = "none";

} else {
    cardFiveImge.style.display = "none";
    cardFiveContent.style.display = "none";
    recentLoaded.innerHTML = "";
}