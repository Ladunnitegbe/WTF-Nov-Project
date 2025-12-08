
const userName = document.querySelector('.side_nav__user_name');
const userEmail = document.querySelector('.side_nav__user_email');
const firstLetter = document.querySelector('.side_nav__first-letter');
const hideArrow = document.querySelector('.hidebtn');
const showArrow = document.querySelector('.showbtn');
const tagContent = document.querySelectorAll('.tab-content');
const currentTab = document.querySelectorAll('.side_nav__current-tab');
const sidenavContainer = document.querySelector('.side_nav_container');
const brand = document.querySelector('.side_nav_brand__all')
const brandContainer = document.querySelector('.side_nav_brand  ');
const logoutBotton = document.querySelectorAll('.logout');

const taskPage = document.getElementById('tasks-page');
const mainPage = document.querySelector('.main__contents');
const dashPage = document.getElementById('dashboard-page');
const communityPage = document.getElementById('community-page');



let getinfo = JSON.parse(localStorage.getItem('userInfo'));

userName.innerHTML = getinfo.Name;
userEmail.innerHTML = getinfo.Email;
firstLetter.innerHTML = getinfo.Name[0];

showArrow.addEventListener('click', () => {
    hideArrow.style.display = "block";
    showArrow.style.display = "none";
    for (let elem of tagContent) {
        elem.style.display = "none"
    }

    sidenavContainer.style.width = "79px";
    dashboardExpand.classList.add('expand-all');
    dashoardContainer.classList.add('container-expanded');

    const taskPageExpand = document.querySelector('.tasks');
    taskPageExpand.classList.add('expand-all');
    taskPageExpand.classList.add('container-expanded');

    const communityExpand = document.querySelector('.community');
    communityExpand.classList.add('expand-all');
    communityExpand.classList.add('container-expanded');

})

hideArrow.addEventListener('click', () => {
    hideArrow.style.display = "none";
    showArrow.style.display = "block";
    for (let elem of tagContent) {
        elem.style.display = "block"
        brand.style.display = "flex";
    }

    sidenavContainer.style.width = "16rem";
    dashboardExpand.classList.remove('expand-all');
    dashoardContainer.classList.remove('container-expanded');

    const taskPageExpand = document.querySelector('.tasks');
    taskPageExpand.classList.remove('expand-all');
    taskPageExpand.classList.remove('container-expanded');

    const communityExpand = document.querySelector('.community');
    communityExpand.classList.remove('expand-all');
    communityExpand.classList.remove('container-expanded');
})


for (let tab of currentTab) {
    tab.addEventListener('click', (e) => {
        e.preventDefault()
        for (let t of currentTab) {
            t.style.backgroundColor = "";
            t.style.color = "";
        }

        tab.style.backgroundColor = "#EEF2FF";
        tab.style.color = "#3650F9";
    })

}

for (e of logoutBotton) {
    e.addEventListener('click', () => {
        window.location.href = "/index.html";
    })
}


dashPage.addEventListener('click', () => {
    window.location.href = '/main.html';
})

taskPage.addEventListener('click', () => {

    mainPage.classList.add('main-tasks__contents');

    fetch('./Modules/tasks/tasks.html').then((res) => {
        return res.text();
    }).then((inside) => {
        mainPage.innerHTML = inside;

        const taskJs = document.createElement('script');
        taskJs.src = '/Modules/tasks/tasks.js';
        mainPage.appendChild(taskJs);


    }).catch((err) => {
        console.log("fail to fetch");
    })

})

communityPage.addEventListener('click', () => {

    fetch('./Modules/community/community.html').then((res) => {
        return res.text();
    }).then((inside) => {
        mainPage.innerHTML = inside;

        const communityJs = document.createElement('script');
        communityJs.src = '/Modules/community/community.js';
        mainPage.appendChild(communityJs);

    }).catch((err) => {
        console.log("fail to fetch");
    })

})