//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.

const paragraph = document.getElementById('practicum');

function makeOne() {
	const allForms = document.forms;
	const numberOfForms = allForms.length;
	paragraph.textContent = "Количество форм на странице: " + numberOfForms;
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
	const formOne = document.forms[0];
	const name = formOne.getAttribute("name");
	paragraphTwo.textContent = name;
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Найдите все формы на странице и выведите их названия

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
	const allForms = document.forms;
	const formsAsArray = [...allForms];
	const formNames = formsAsArray.map(form => form.getAttribute("name"));
	paragraphThree.textContent = formNames.join(", ");
}

document.querySelector('.b-3').onclick = makeThree;