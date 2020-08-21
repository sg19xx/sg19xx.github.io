function colorLink(event) {
    let navLink = document.querySelectorAll('.header li');
    for(let elem of navLink) {
        elem.style.color = '#fff'
    }
    event.target.style.color = 'orange';
}

function main() {
    let main = document.querySelector('.main');

    let mainWrap = document.createElement('div');
    mainWrap.classList.add('mainWrap');
    mainWrap.classList.add('temp');
    mainWrap.style.opacity = 0;

    let h1 = document.createElement('h1');
    h1.textContent = "Привет друг.";

    let h2 = document.createElement('h2');
    h2.textContent = "Меня зовут Сергей. Я занимаюсь web разработкой сайтов и приложений. Для ознакомления с моим творчеством к вашему вниманию раздел работы.";

    mainWrap.appendChild(h1);
    mainWrap.appendChild(h2);
    main.appendChild(mainWrap)
}

function works() {
    let main = document.querySelector('.main');

    let worksWrap = document.createElement('div');
    worksWrap.classList.add('worksWrap');
    worksWrap.classList.add('temp');
    worksWrap.style.opacity = 0;

    let elems = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for(let i = 0; i < 9; i++) {
        let div = document.createElement('a');
        div.setAttribute('href', `/works/${elems[i]}`)
        div.classList.add('elemWork');
        div.classList.add(elems[i]);
        worksWrap.appendChild(div)
    }

    main.appendChild(worksWrap)
}

function aboutMe() {
    let main = document.querySelector('.main');
    let container = document.createElement('div');

    let aboutMeWrap = document.createElement('div');
    aboutMeWrap.classList.add('aboutMeWrap');
    aboutMeWrap.classList.add('temp');
    aboutMeWrap.style.opacity = 0;

    let avatar = document.createElement('div');
    avatar.classList.add('avatar');

    let name = document.createElement('h2');
    name.textContent = "Сергей Глазков";

    let avatarPodpis = document.createElement('p');
    avatarPodpis.textContent = "Аватар сделан по моему подобию.";

    let mySkillText = document.createElement('h3');
    mySkillText.textContent = 'Мои навыки:'

    let spanSkill = document.createElement('ul');

    let skillList = ['HTML', 'CSS', 'JavaScript', 'Ruby']

    for(let i = 0; i < skillList.length; i++) {
        let liSkill = document.createElement('li');
        liSkill.textContent = skillList[i];
        spanSkill.appendChild(liSkill)
    }

    container.appendChild(name);

    container.appendChild(avatar);

    container.appendChild(avatarPodpis);

    container.appendChild(mySkillText);

    container.appendChild(spanSkill);

    aboutMeWrap.appendChild(container);
    main.appendChild(aboutMeWrap)
}

function contacts() {
    let main = document.querySelector('.main');

    let contactsWrap = document.createElement('div');
    contactsWrap.classList.add('contactsWrap');
    contactsWrap.classList.add('temp');
    contactsWrap.style.opacity = 0;

    let h2 = document.createElement('h2');
    h2.textContent = "Связатся со мнои можно по почте: xsg19xxx@gmail.com";

    contactsWrap.appendChild(h2);
    main.appendChild(contactsWrap)
}

function sizeSelection() {
    let main = document.querySelector('.main');
    main.style.height = `${window.innerHeight - 96}px`
}

function animatInfoTwo(typeInfo, className) {
    if (typeInfo === 'main') {
        main()
    } else if(typeInfo === 'works') {
        works()
    } else if(typeInfo === 'aboutMe') {
        aboutMe()
    } else if(typeInfo === 'contacts') {
        contacts()
    }
    let wrapInfo = document.querySelector(`.${className}`);
    let opacity = 0;
    let stopInterval = setInterval(function() {
        if(opacity <= 1.01) {
            wrapInfo.style.opacity = opacity;
            opacity += 0.02
            //1
        } else {
            clearInterval(stopInterval);
            clickNav = 0
        }
    }, 1 )
    //4
}

function animatInfoOne(typeInfo, className, event) {
    if(clickNav === 0 && event.target.style.color !== ('orange' || '#FFA500	' || 'rgb(255,165,0)')) {
    clickNav = 1;
    let wrapInfo = document.querySelector('.temp');
    let opacity = 1;
    let stopInterval = setInterval(function() {
        if(opacity >= 0) {
            wrapInfo.style.opacity = opacity;
            opacity -= 0.02
            //1
        } else {
            wrapInfo.parentElement.removeChild(wrapInfo);
            clearInterval(stopInterval);
            animatInfoTwo(typeInfo, className)
        }
    }, 1)
    //4
    }
}

let clickNav = 0;
sizeSelection();
addEventListener('resize', sizeSelection);
