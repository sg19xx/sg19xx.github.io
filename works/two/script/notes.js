function checkColorHeader () {
    if (localStorage.getItem('headerColor') !== '') {
        headerWrap.style.backgroundColor = localStorage.getItem('headerColor');
    }
}

function checkNalichieNote () {
    let ix = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        for (let elem of wrapLeftNav.children) {
            if (key !== elem.className && key !== 'size' && key !== 'headerColor' && key !== 'lang' && key !== 'opacityClick') {
                ix++;
            }
        }
        if (ix === wrapLeftNav.children.length) {
            let nameElement = localStorage.key(i);
            let element = document.createElement('li');
            element.classList.add(nameElement);
            element.textContent = `${nameElement}`;
            wrapLeftNav.appendChild(element);
        }
        ix = 0;
    }
}

function checkSizeLocal () {
    if (document.body.style.fontSize === '12px') {
        localStorage.setItem('size', '12px');
    } else if (document.body.style.fontSize === '16px') {
        localStorage.setItem('size', '16px');
    } else if (document.body.style.fontSize === '19px') {
        localStorage.setItem('size', '19px');
    } 
}

function chechSizeApply () {
    if (localStorage.getItem('size') === '12px') {
        document.documentElement.style.fontSize = '12px';
    } else if (localStorage.getItem('size') === '16px') {
        document.documentElement.style.fontSize = '16px';
    } else if (localStorage.getItem('size') === '19px') {
        document.documentElement.style.fontSize = '19px';
    } else {
        localStorage.setItem('size', '16px')
        document.documentElement.style.fontSize = '16px'
    }
}

function checkLangLocal () {
    if (localStorage.getItem('lang') === 'ru') {
       let rusLang = document.querySelector('.rusLang');
       rusLang.selected = true;
    } else if (localStorage.getItem('lang') === 'eng') {
       let engLang = document.querySelector('.engLang');
       engLang.selected = true;
    }
}

function checkLang () {
    if (localStorage.getItem('lang') === 'ru') {
        logo.textContent = 'ЗАПИСНОЙ НАУТИЛУС';
        addNav.textContent = 'ДОБАВИТЬ';
        delNav.textContent = 'УДАЛИТЬ';
        join.textContent = 'ВОЙТИ';
    } else if (localStorage.getItem('lang') === 'eng') {
        logo.textContent = 'NOTEBOOK NAUTILUS';
        addNav.textContent = 'ADD';
        delNav.textContent = 'DELETE';
        join.textContent = 'JOIN';
    }
}

chechSizeApply();
function checkColorHelp () {
    let checkDeleteColorAll = document.querySelectorAll('.checkDelete');
    for (let elem of checkDeleteColorAll) {
        elem.addEventListener('change', function () {
            if (elem.checked) {
                elem.parentElement.style.color = 'red';
                elem.parentElement.style.borderColor = 'black';
            } else if (elem.checked === false) {
                elem.parentElement.style.color = '#000'; 
                elem.parentElement.style.borderColor = 'black';
            }
        })
    }
}

let join = document.querySelector('.joinI');
let lang = document.querySelector('#lang');
let addNav = document.querySelector('.addNav');
let delNav = document.querySelector('.delNav');
let wrapLeftNav = document.querySelector('.wrapLeftNav');
let wrapLeftNavAll = wrapLeftNav.children;
let logo = document.querySelector('.logo');
let clickDelete = 0;
let setting = document.querySelector('.setingL');
let headerWrap = document.querySelector('.headerWrap');
let wrapMainWindow = document.querySelector('.wrapMainWindow');
let windowNote = document.querySelector('.right');
let demoNotes = document.querySelector('.demoNotes');
let arrNameNote = [];
let arrNameNoteD = [];
checkLang();
checkColorHeader();

join.addEventListener('click', function(event) {
    if (lang.value === "rus") {
        alert('В данный момент функция синхронизаций не работает, сайт работает на устройстве(не чистите браузер и всё будет сохранено).');
        event.preventDefault();
    } else if (lang.value === "eng") {
        alert('At the moment, the syncing function is not working, the site is running on the device(do not clean the browser and everything will be saved).');
        event.preventDefault();
    }
})

lang.addEventListener('change', function (event) {
    if (event.target.value === 'rus') {
        join.textContent = 'ВОЙТИ';
        addNav.textContent = 'ДОБАВИТЬ';
        delNav.textContent = 'УДАЛИТЬ';
        logo.textContent = 'ЗАПИСНОЙ НАУТИЛУС';
        localStorage.setItem('lang', 'rus');
    } else if (event.target.value === 'eng') {
        join.textContent = 'JOIN';
        addNav.textContent = 'ADD';
        delNav.textContent = 'DELETE';
        logo.textContent = 'NOTEBOOK NAUTILUS';
        localStorage.setItem('lang', 'eng');
    }
})

var nameElement;
checkNalichieNote();
addNav.addEventListener('click', function (event) {
    let element = document.createElement('li');
    if (lang.value === "rus") {
        nameElement = prompt(`Введите название заметки
(Название заметки вводите без пробелов, вместо пробела используйте '_')`, '');
    } else if (lang.value === "eng") {
        nameElement = prompt(`Enter the name of the note
(Enter the note name without spaces, use '_'instead of a space)`, '');
    }
        if (nameElement !== '' && nameElement !== null) { 
        if (nameElement.length <= 21) {
            element.textContent = nameElement;
            element.classList.add(nameElement);
            wrapLeftNav.appendChild(element);
            localStorage.setItem(nameElement, '');
        } else if (nameElement.length > 21) {
            nameElement = nameElement.slice(0, 21);
            element.textContent = nameElement + '...'
            element.classList.add(nameElement);
            wrapLeftNav.appendChild(element);
            localStorage.setItem(nameElement, '');
        }
        } else {
            if (lang.value === "rus" && nameElement !== null) {
                alert('Название заметки должно быть не пустым.')
                event.preventDefault();
            } else if (lang.value === "eng" && nameElement !== null) {
                alert('The note name should not be empty.');
                event.preventDefault();
            }
        }
});

delNav.addEventListener('click', function () {
    if (clickDelete == 0) {
    for (let elem of wrapLeftNavAll) {
        if (elem.className !== 'leftNav' && elem.parentElement !== null) {
            let checkDeleteTest = document.querySelectorAll('.checkedDelete');
            if (checkDeleteTest.length < wrapLeftNavAll.length - 1) {
                delNav.style.color = "#6600ff";
                let inputElem = document.createElement('input');
                inputElem.setAttribute('type', 'checkbox');
                inputElem.classList.add('checkedDelete');
                inputElem.style.cssText = 'margin-left: 6px';
                elem.appendChild(inputElem);
                clickDelete = 1;
            }
        }
    }
    checkColorHelp();
    }
    else if (clickDelete === 1) {
        delNav.style.color = "#000";
        clickDelete = 0;
        let checkDelete = document.querySelectorAll('.checkedDelete');
        let checkScore = 0;
        for (let elem of checkDelete) {
            if (elem.checked && elem.parentElement.className !== 'leftNav') {
                let elemDeleteTemp = elem.parentElement.parentElement;
                elemDeleteTemp.removeChild(elem.parentElement);
                checkScore++;
            }
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (elem.parentElement.className === key && elem.checked) {
                    localStorage.removeItem(key);
                }
            }
        }
        for (let checkRemove of checkDelete) {
            checkRemove.parentElement.removeChild(checkRemove);
        }
        if (document.querySelector('.windowNoteElement') !== null && checkScore !== 0) {
            let windowNoteElement = document.querySelector('.windowNoteElement');
            windowNoteElement.parentElement.removeChild(windowNoteElement);
        }
    }
});

setting.addEventListener('click', function () {
    let modalSetting = document.createElement('div');
    let opacityBlock = document.createElement('div');
    opacityBlock.classList.add('opacityBlock');
    modalSetting.classList.add('modalSetting');
    document.documentElement.appendChild(opacityBlock);
    document.documentElement.appendChild(modalSetting);
    opacityBlock.addEventListener('click', function () {
        modalSettingDOM.parentElement.removeChild(modalSettingDOM);
        opacityBlock.parentElement.removeChild(opacityBlock);
    });
    let closeModal = document.createElement('button');
    closeModal.classList.add('closeModal');
    if (lang.value === "rus") {
        closeModal.textContent = 'ЗАКРЫТЬ';
    } else if (lang.value === "eng") {
        closeModal.textContent = 'CLOSE';
    }
    let modalSettingDOM = document.querySelector('.modalSetting');
    modalSettingDOM.appendChild(closeModal);
    let closeAndClick = document.querySelector('.closeModal');
    closeAndClick.addEventListener('click', function () {
        modalSettingDOM.parentElement.removeChild(modalSettingDOM);
        opacityBlock.parentElement.removeChild(opacityBlock);
    });
    let clickSelectWrap = document.createElement('div');
    clickSelectWrap.classList.add('clickSelectWrap');
    let clickColorParagrafWrap = document.createElement('div');
    let clickColorParagraf = document.createElement('h3');
    clickColorParagraf.classList.add('clickColorParagraf');
    if (lang.value === "rus") {
        clickColorParagraf.textContent = 'ЦВЕТ ВЕРХНЕЙ ПАНЕЛИ';
    } else if (lang.value === "eng") {
        clickColorParagraf.textContent = 'SELECTING THE COLOR OF THE TOP PANEL';
    }
    clickColorParagrafWrap.appendChild(clickColorParagraf);
    let clickColorSelectWraps = document.createElement('div');
    clickColorSelectWraps.classList.add('clickColorSelectWraps');
    clickSelectWrap.appendChild(clickColorParagrafWrap);
    clickSelectWrap.appendChild(clickColorSelectWraps);
    for (let i = 0; i < 7; i++) {
        let clickColorSelect = document.createElement('div');
        clickColorSelect.classList.add('clickColorSelect');
        clickColorSelect.classList.add(`color${i}`);
        if (i === 0) {
            if (headerWrap.style.backgroundColor === 'rgb(102, 0, 255)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 1) {
            if (headerWrap.style.backgroundColor === 'rgb(74, 118, 168)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 2) {
            if (headerWrap.style.backgroundColor === 'rgb(226, 134, 85)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 3) {
            if (headerWrap.style.backgroundColor === 'rgb(192, 222, 152)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 4) {
            if (headerWrap.style.backgroundColor === 'rgb(34, 26, 105)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 5) {
            if (headerWrap.style.backgroundColor === 'rgb(247, 177, 45)') {
                clickColorSelect.style.border = '2px solid green';
            }
        } else if (i === 6) {
            if (headerWrap.style.backgroundColor === 'rgb(98, 159, 188)') {
                clickColorSelect.style.border = '2px solid green';
            }
        }
        clickColorSelectWraps.appendChild(clickColorSelect);
    }
    clickColorSelectWraps.addEventListener('click', function (event) {
        if (event.target.tagName === 'DIV' && event.target.className != 'clickColorSelectWraps') {
            for (let elem of clickColorSelectWraps.children) {
                elem.style.border = '0';
            }
            event.target.style.border = '2px solid green';
            }
    })
    checkSizeLocal();
    let clickSizeParagraf = document.createElement('h3');
    clickSizeParagraf.classList.add('clickSizeParagraf');
    if (lang.value === "rus") {
        clickSizeParagraf.textContent = 'РАЗМЕР ТЕКСТА';
    } else if (lang.value === "eng") {
        clickSizeParagraf.textContent = 'TEXT SIZE';
    }
    clickSelectWrap.appendChild(clickSizeParagraf);
    let clickSelectSizeWrap = document.createElement('div');
    clickSelectSizeWrap.classList.add('clickSelectSizeWrap');
    for (let i = 0; i < 3; i++) {
        let elementSelectSize = document.createElement('input');
        elementSelectSize.classList.add('elementSelectSize');
        if (localStorage.getItem('size') === '12px' && i === 0) {
            elementSelectSize.checked = true;
        } else if (localStorage.getItem('size') === '16px' && i === 1) {
            elementSelectSize.checked = true;
        } else if (localStorage.getItem('size') === '19px' && i === 2) {
            elementSelectSize.checked = true;
        }
        elementSelectSize.setAttribute('name', 'selectCheck');
        let elementSelectSizeParagraf = document.createElement('span');
        elementSelectSizeParagraf.classList.add('elementSelectSizeParagraf');
        elementSelectSize.setAttribute('type', 'radio');
        if (i === 0) {
            if (lang.value === "rus") {
                elementSelectSizeParagraf.textContent = 'МАЛЕНЬКИЙ';
            } else if (lang.value === "eng") {
                elementSelectSizeParagraf.textContent = 'LITTLE';
            }
        } else if (i === 1) {
            if (lang.value === "rus") {
                elementSelectSizeParagraf.textContent = 'СРЕДНИЙ';
            } else if (lang.value === "eng") {
                elementSelectSizeParagraf.textContent = 'MEDIUM';
            }
        } else if (i === 2) {
            if (lang.value === "rus") {
                elementSelectSizeParagraf.textContent = 'БОЛЬШОЙ';
            } else if (lang.value === "eng") {
                elementSelectSizeParagraf.textContent = 'BIG';
            }
        }
        clickSelectSizeWrap.appendChild(elementSelectSizeParagraf);
        clickSelectSizeWrap.appendChild(elementSelectSize);
    }
    clickSelectWrap.appendChild(clickSelectSizeWrap);
    modalSettingDOM.appendChild(clickSelectWrap)
    let btnApply = document.createElement('button');
    btnApply.classList.add('btnApply');
    if (lang.value === "rus") {
        btnApply.textContent = 'ПРИМЕНИТЬ';
    } else if (lang.value === "eng") {
        btnApply.textContent = 'APPLY';
    }
    modalSettingDOM.appendChild(btnApply);
    let x = document.querySelectorAll('.elementSelectSize');
    for (let elemThree of x) {
        elemThree.addEventListener('change', function (event) {
            for (let elemThreeDouble of x) {
                elemThreeDouble.removeAttribute('checked');
            }
            if (event.target) {
                event.target.setAttribute('checked', true);
            }
        });
    }
    let btnApplyClick = document.querySelector('.btnApply');
    btnApplyClick.addEventListener('click', function () {
        for (let elem of clickColorSelectWraps.children) {
            if (elem.style.border === '2px solid green') {
                let tempColors = window.getComputedStyle(elem).backgroundColor;
                headerWrap.style.backgroundColor = tempColors;
                localStorage.setItem('headerColor', tempColors);
        }
        let elementSelectSizeAll = document.querySelectorAll('.elementSelectSize');
        for (let i = 0; i < elementSelectSizeAll.length; i++) {
            if (elementSelectSizeAll[i].checked === true) {
                if (i === 0) {
                    document.documentElement.style.fontSize = '12px';
                    document.body.style.fontSize = '12px';
                } else if (i === 1) {
                    document.documentElement.style.fontSize = '16px';
                    document.body.style.fontSize = '16px';
                } else if (i === 2) {
                    document.documentElement.style.fontSize = '19px';
                    document.body.style.fontSize = '19px';
                }
            }
    checkSizeLocal();
}}
    });
});

let x = 0;
let itemEditClick = 0;
let checkNameNote;
let checkClickNotes = 0;
wrapLeftNav.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI' && event.target.className !== 'leftNav') {
        for (let elem of wrapLeftNav.children) {
            elem.style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'lightgray';
        if(document.querySelector('.windowNoteElement') !== null) {
            let windowNoteElement = document.querySelector('.windowNoteElement');
            windowNoteElement.parentElement.removeChild(windowNoteElement);
        }
        if (itemEditClick === 1) {
            itemEditClick = 0;
        }
        let windowNoteElement = document.createElement('div');
        windowNoteElement.classList.add('windowNoteElement');
        let windowEditNote = document.createElement('div');
        windowEditNote.classList.add('windowEditNote');
        let windowEditElements = document.createElement('div');
        windowEditElements.classList.add('windowEditElements');
        if (localStorage.getItem('lang') === 'rus') {
            windowEditElements.title = 'Редактировать заметку';
        } else if (localStorage.getItem('lang') === 'eng') {
            windowEditElements.title = 'Edit a note';
        }
        var windowEditElementsHTML = document.createElement('div');
        windowEditElementsHTML.classList.add('windowEditElementsHTML');
        if (localStorage.getItem('opacityClick') === 'HTML') {
            windowEditElementsHTML.style.opacity = '0.2';
        } else if (localStorage.getItem('opacityClick') === 'TEXT') {
            windowEditElementsHTML.style.opacity = '1';
        }
        if (localStorage.getItem('lang') === 'rus') {
            windowEditElementsHTML.title = 'Формат HTML';
        } else if (localStorage.getItem('lang') === 'eng') {
            windowEditElementsHTML.title = 'HTML format';
        }
        var windowEditElementsTXT = document.createElement('div');
        windowEditElementsTXT.classList.add('windowEditElementsTXT');
        if (localStorage.getItem('opacityClick') === 'TEXT') {
            windowEditElementsTXT.style.opacity = '0.2';
        } else if (localStorage.getItem('opacityClick') === 'HTML') {
            windowEditElementsTXT.style.opacity = '1';
        } else {
            windowEditElementsTXT.style.opacity = '0.2';
            windowEditElementsHTML.style.opacity = '1';
            localStorage.setItem('opacityClick', 'TEXT');
        }
        if (localStorage.getItem('lang') === 'rus') {
            windowEditElementsTXT.title = 'Формат TEXT';
        } else if (localStorage.getItem('lang') === 'eng') {
            windowEditElementsTXT.title = 'TEXT format';
        }
        let windowNoteNautilus = document.createElement('div');
        windowNoteNautilus.classList.add('windowNoteNautilus');
        windowEditNote.appendChild(windowEditElements);
        windowEditNote.appendChild(windowEditElementsTXT);
        windowEditNote.appendChild(windowEditElementsHTML);
        for (let i = 0; i < localStorage.length; i++) {
            if (event.target.className === localStorage.key(i)) {
                let name = event.target.className;
                if (localStorage.getItem('opacityClick') === 'TEXT') {
                    windowNoteNautilus.textContent = localStorage.getItem(name);
                } else if (localStorage.getItem('opacityClick') === 'HTML') {
                    windowNoteNautilus.innerHTML = localStorage.getItem(name);
                }
                checkNameNote = event.target.className;
            }
        }
        windowNoteElement.appendChild(windowEditNote);
        windowNoteElement.appendChild(windowNoteNautilus);
        windowNote.appendChild(windowNoteElement);
        windowEditElementsHTML.addEventListener('click', function (event) {
            if (this.style.opacity === '0.2') {
                if (localStorage.getItem('lang') === 'rus') {
                    alert('Вы уже используете редактирование в формате HTML.');
                    event.preventDefault();
                } else if (localStorage.getItem('lang') === 'eng') {
                    alert('You are already using HTML editing.');
                    event.preventDefault();
                }
            } else if (this.style.opacity === '1') {
                if (itemEditClick === 1) {
                    if (localStorage.getItem('lang') === 'rus') {
                        alert('Закончи редактировать заметку.');
                        event.preventDefault();
                    } else if (localStorage.getItem('lang') === 'eng') {
                        alert('Finish editing the note.');
                        event.preventDefault();
                    }
                } else {
                    windowEditElementsHTML.style.opacity = '.2';
                    windowEditElementsTXT.style.opacity = '1';
                    localStorage.setItem('opacityClick', 'HTML');
                    let name = event.target.className;
                    windowNoteNautilus.innerHTML = localStorage.getItem(checkNameNote);
                }
            }
        });

        windowEditElementsTXT.addEventListener('click', function (event) {
            if (this.style.opacity === '0.2') {
                if (localStorage.getItem('lang') === 'rus') {
                    alert('Вы уже используете редактирование в формате TEXT.');
                    event.preventDefault();
                } else if (localStorage.getItem('lang') === 'eng') {
                    alert('You are already using TEXT editing.');
                    event.preventDefault();
                }
            } else if (this.style.opacity === '1') {
                if (itemEditClick === 1) {
                    if (localStorage.getItem('lang') === 'rus') {
                        alert('Закончи редактировать заметку.');
                        event.preventDefault();
                    } else if (localStorage.getItem('lang') === 'eng') {
                        alert('Finish editing the note.');
                        event.preventDefault();
                    }
                } else {
                    windowEditElementsHTML.style.opacity = '1';
                    windowEditElementsTXT.style.opacity = '.2';
                    localStorage.setItem('opacityClick', 'TEXT');
                    let name = event.target.className;
                    windowNoteNautilus.textContent = localStorage.getItem(checkNameNote);
                }
            }
        });

    windowEditElements.addEventListener('click', function (event) {
        if (itemEditClick === 0) {
            windowEditElements.style.backgroundImage = 'url(img/save.png)';
            if (localStorage.getItem('lang') === 'rus') {
                windowEditElements.setAttribute('title', 'Сохранить заметку');
            } else if (localStorage.getItem('lang') === 'eng') {
                windowEditElements.setAttribute('title', 'Save a note');
            }
            let editWindowNote = document.createElement('textarea');
            editWindowNote.classList.add('textareaEdit');
            editWindowNote.innerHTML = localStorage.getItem(checkNameNote);
            windowNoteNautilus.appendChild(editWindowNote);
            itemEditClick = 1;
        } else if (itemEditClick === 1) {
            windowEditElements.style.backgroundImage = 'url(img/edit.png)';
            if (localStorage.getItem('lang') === 'rus') {
                windowEditElements.setAttribute('title', 'Сохранить заметку');
            } else if (localStorage.getItem('lang') === 'eng') {
                windowEditElements.setAttribute('title', 'Save a note');
            }
            itemEditClick = 0;
            let editWindowNote = document.querySelector('.textareaEdit');
            if (windowEditElementsTXT.style.opacity === '0.2') {
                windowNoteNautilus.textContent = editWindowNote.value;
                localStorage.setItem(checkNameNote, windowNoteNautilus.textContent);
            } else if (windowEditElementsHTML.style.opacity === '0.2') {
                windowNoteNautilus.innerHTML = editWindowNote.value;
                localStorage.setItem(checkNameNote, windowNoteNautilus.innerHTML);
            }
    } 
    });

    checkClickNotes = 1;
}});

logo.addEventListener('click', function () {
    if(document.querySelector('.windowNoteElement') !== null) {
        let windowNoteElement = document.querySelector('.windowNoteElement');
        windowNoteElement.parentElement.removeChild(windowNoteElement);
    }
    if (itemEditClick === 1) {
        itemEditClick = 0;
    }
    for (let elem of wrapLeftNav.children) {
        elem.style.backgroundColor = '';
    }  
});

