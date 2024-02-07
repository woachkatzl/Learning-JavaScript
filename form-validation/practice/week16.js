//Task 1
//Find all the forms on the page. When pressing the button the number of pages should appear on the page.

const paragraph = document.getElementById('practicum');

function makeOne() {
	const allForms = document.forms;
	const numberOfForms = allForms.length;
	paragraph.textContent = "Number of forms on this page: " + numberOfForms;
}

document.querySelector('.b-1').onclick = makeOne;

//Task 2
//Find the first form on the page. Pressing the button should show the "name" attribute of this form.

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
	const formOne = document.forms[0];
	const name = formOne.getAttribute("name");
	paragraphTwo.textContent = name;
}

document.querySelector('.b-2').onclick = makeTwo;

//Task 3
//Find all the forms on the page and get their names

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
	const allForms = document.forms;
	const formsAsArray = [...allForms];
	const formNames = formsAsArray.map(form => form.getAttribute("name"));
	paragraphThree.textContent = formNames.join(", ");
}

document.querySelector('.b-3').onclick = makeThree;

//Task 4
//Find the third form on the papge using document.forms and the form name.
//Using form.elements collection find out the number of elements on the page and display them

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
	const formThreeElements = document.forms.formThree.elements;
	const numberOfElements = formThreeElements.length;

	paragraphFour.textContent = `Number of elements in form Three: ${numberOfElements}`
}

document.querySelector('.b-4').onclick = makeFour;