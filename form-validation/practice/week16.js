//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById('practicum');

function makeOne() {
	//Ваш код
	const allForms = document.forms;
	const numberOfForms = allForms.length;
	paragraph.textContent = "Количество форм на странице: " + numberOfForms;
}

document.querySelector('.b-1').onclick = makeOne;

