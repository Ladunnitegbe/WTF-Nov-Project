
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
    sidenavContainer.style.width = "79px"



})

hideArrow.addEventListener('click', () => {
    hideArrow.style.display = "none";
    showArrow.style.display = "block";
    for (let elem of tagContent) {
        elem.style.display = "block"
        brand.style.display = "flex";
    }

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




