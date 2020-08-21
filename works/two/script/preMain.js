function preLoad () {
    let elemWindow = document.createElement('div');
    elemWindow.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: lightgray; z-index: 1; color: #000';
    let text;
    let textHTML = document.createElement('p');
    textHTML.style.cssText = 'text-align: center; width: 100%; font-size: 40px; position: absolute; left: 50%; top: 40%; transform: translate(-50%, -50%)';
    if (localStorage.getItem('lang') === 'rus') {
        text = 'Привет друг. Добро пожаловать в блокнот Наутилус.';
    } else if (localStorage.getItem('lang') === 'eng') {
        text = 'Hello friend. Welcome to the Nautilus notebook.';
    }
    textHTML.textContent = text;
            elemWindow.appendChild(textHTML);
            document.documentElement.appendChild(elemWindow);
            let opValue = 1
            let stopInterv = setInterval(function () {
                if (opValue > 0) {
                    elemWindow.style.opacity = `${opValue}`;
                    opValue -= 0.01;
                }
                if (opValue < 0.05 && elemWindow !== null) {
                    clearTimeout(stopInterv);
                    elemWindow.parentElement.removeChild(elemWindow);
                }
            }, 50);
        if (localStorage.getItem('headerColor') === null) {
            localStorage.setItem('headerColor', 'rgb(102, 0, 255)');
        }
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'rus');
        }
}

preLoad();

window.addEventListener('load', function () {
    let logoTemp = document.querySelector('.logo');
    let joinITemp = document.querySelector('.joinI');
    let addNavTemp = document.querySelector('.addNav');
    let delNavTemp = document.querySelector('.delNav');
    let langTemp = document.querySelector('#lang');
    if (localStorage.getItem('lang') === 'rus') {
        logoTemp.textContent = 'ЗАПИСНОЙ НАУТИЛУС';
        joinITemp.textContent = 'ВОЙТИ';
        addNavTemp.textContent = 'ДОБАВИТЬ';
        delNavTemp.textContent = 'УДАЛИТЬ';
    } else if (localStorage.getItem('lang') === 'eng') {
        logoTemp.textContent = 'NOTEBOOK NAUTILUS';
        joinITemp.textContent = 'JOIN';
        addNavTemp.textContent = 'ADD';
        delNavTemp.textContent = 'DELETE';
    }
        if (localStorage.getItem('lang') === 'rus') {
            let elemsCreate1ru = document.createElement('option');
            let elemsCreate2ru = document.createElement('option');
            elemsCreate1ru.classList.add('rusLang');
            elemsCreate2ru.classList.add('engLang');
            elemsCreate1ru.setAttribute('value', 'rus');
            elemsCreate2ru.setAttribute('value', 'eng');
            elemsCreate1ru.selected;
            elemsCreate1ru.textContent = 'RU';
            elemsCreate2ru.textContent = 'EN';
            langTemp.appendChild(elemsCreate1ru);
            langTemp.appendChild(elemsCreate2ru);
        } else if (localStorage.getItem('lang') === 'eng') {
            let elemsCreate1eng = document.createElement('option');
            let elemsCreate2eng = document.createElement('option');
            elemsCreate1eng.classList.add('rusLang');
            elemsCreate2eng.classList.add('engLang');
            elemsCreate1eng.setAttribute('value', 'rus');
            elemsCreate2eng.setAttribute('value', 'eng');
            elemsCreate2eng.selected;
            elemsCreate2eng.textContent = 'EN';
            elemsCreate1eng.textContent = 'RU';
            langTemp.appendChild(elemsCreate2eng);
            langTemp.appendChild(elemsCreate1eng);
        }
    let headerWrapTemp = document.querySelector('.headerWrap');
    if (localStorage.getItem('headerColor') !== headerWrapTemp.style.backgroundColor) {
    }
})