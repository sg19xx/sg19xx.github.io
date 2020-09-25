let state = {
	colorText: 'black',
	colorPrefix: 'black',
	colorNickname: 'black'
}

const clearSelect = (event) => {
	let contain = event.parentElement.children;
	for(let item of contain) {
		if(item.getAttribute('stroke') === 'orange') {
			item.removeAttribute('stroke');
			item.removeAttribute('stroke-width');
			item.setAttribute('opacity', 1);
		}
	}
}

const color = (type) => {
	let circles = document.querySelectorAll('.circles');
	for(let elem of circles) {
		for(let elemChild of elem.children) {
			elemChild.addEventListener('click', () => {
				if(elemChild.className.baseVal === 'itemsOne' && type === 'text') {
					state.colorText = getComputedStyle(elemChild).fill
				} else if (elemChild.className.baseVal === 'itemsTwo' && type === 'prefix') {
					state.colorPrefix = getComputedStyle(elemChild).fill
				} else if (elemChild.className.baseVal === 'itemsThree' && type === 'nickname') {
					state.colorNickname = getComputedStyle(elemChild).fill
				}
				clearSelect(elemChild)
				elemChild.setAttribute('stroke', 'orange')
				elemChild.setAttribute('stroke-width', 2)
				elemChild.setAttribute('opacity', 0.6)
			})
		}
	}
}

const check = () => {
	let textOne = document.querySelector('.one');
	let textTwo = document.querySelector('.two');
	let textThree = document.querySelector('.three');
	textOne.style.color = state.colorPrefix;
	textTwo.style.color = state.colorNickname;
	textThree.style.color = state.colorText;
}

const editNickname = () => {
	let textNickname = document.querySelector('.textNickname');
	let textEdit = document.querySelector('.two');
	//CHECK
	textEdit.textContent = `[${textNickname.value}]`;
	//CHECK
	textNickname.addEventListener('input', () => {
		textEdit.textContent = `[${textNickname.value}]`
	})
}

const clickPerform = () => check()

color('text')
color('prefix')
color('nickname')
editNickname()