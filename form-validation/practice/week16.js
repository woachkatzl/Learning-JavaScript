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

//Task 5
//List the names of all the elements in form 2.

const paragraphFive = document.getElementById('practicum5');

function makeFive() {

	const allElements = document.forms.formTwo.elements;
	const allElementsArray = [...allElements];
	const elementNames = allElementsArray.map(element => element.getAttribute("name"));
	paragraphFive.textContent = elementNames.join(", ");
}

document.querySelector('.b-5').onclick = makeFive;

//Task 6
//Find and display the value of the radio button in form four

const paragraphSix = document.getElementById('practicum6');

function makeSix() {

	const radioBtn = document.forms.lastForm.elements.fourthName;
	paragraphSix.textContent = radioBtn.value;
}

document.querySelector('.b-6').onclick = makeSix;

//Task 7
//Find and display the id values of all the checkbox elements in form 2

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {

	const elements = document.forms.formTwo.elements;
	const checkboxElementsIds = [];
	for (i = 0; i < elements.length; i++) {
		if (elements[i].type === "checkbox") {
			const id = elements[i].getAttribute("id");
			checkboxElementsIds.push(id);
		}
	}
	paragraphSeven.textContent = checkboxElementsIds.join(", ");
}

document.querySelector('.b-7').onclick = makeSeven;

//Task 8
//Check if the radio button in form four has been selected

const paragraphEight = document.querySelector("#practicum8");

function makeEight(e) {
	e.preventDefault();

	const formFourRadio = document.forms.lastForm.elements.fourthName;
	formFourRadio.checked ? paragraphEight.textContent = "Radio button is selected" : paragraphEight.textContent = "Radio button is not selected"
}

document.querySelector('.b-8').onclick = makeEight;

//Task 9
//check which option is selected in form one

const paragraphNine = document.querySelector("#practicum9");

function makeNine() {
	const selectField = document.forms.formOne.elements.firstSelect;
	paragraphNine.textContent = selectField.value;
}

document.querySelector('.b-9').onclick = makeNine;

//Task 10
//Make option 3 in form one default

function makeTen() {
	//Ваш код
	const select = document.forms.formOne.elements.firstSelect;
	select.selectedIndex = 2;
}

makeTen();

//Task 11
//Check if all the fields in form one are filled before submitting. There is an error element in Form one with id "errorMessage"
//Clear all the fields after submission

const formOne = document.forms.formOne;
const formOneError = document.querySelector("#errorMessage");

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Cancel submission

	const elements = formOne.elements;
	const [name, email, rest] = elements; //Saved the form fields as variables using destructuring and rest
	if (!name.value || !email.value) {
		formOneError.textContent = "Please fill out all the fields";
	} else if (name.value && email.value) {
		formOneError.textContent = "";
		formOne.reset();
	}
});

//Task 12
//Add email field validation

const emailInput = document.forms.formOne.elements.firstEmail;

emailInput.oninput = function () {

	const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.+.[A-Z]{1,3}$/i;
	const valid = emailRegExp.test(emailInput.value);
	if (!valid) {
		emailInput.style.borderColor = "red";
		formOneError.textContent = "Неправильный формат email"; //error container saved as a variable in the previous task
	} else if (valid) {
		emailInput.style.borderColor = null;
		formOneError.textContent = null;
	}
};

//Task 13
//When submitting the second at least one checkboxe should be checked. If none is checked cancel submission and display the error message in the element with "result13" id

const formTwoBtn = document.forms.formTwo.elements.secondButton;

formTwoBtn.onclick = function (event) {
	event.preventDefault();
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {

		document.getElementById('result13').textContent = 'Choose at least one option';
	} else {
		document.getElementById('result13').textContent = 'Success!';
	}
};

//Task 14
//When choosing "I want to sign up" option in form four the submit button should be enabled. Otherwise make it disabled.

const formFourBtn = document.forms.lastForm.elements.fourthButton;
const formRadio = document.forms.lastForm.elements.fourthName;
formFourBtn.disabled = true;

formRadio.onchange = function () {
	if (formRadio.checked) {
		formFourBtn.disabled = false;
	}
}

//Task 15
//Find all the input fields and set their placeholder attribute to "your infomation"

document.querySelector('.b-15').onclick = function() {
	const allFields = document.querySelectorAll('input');
	allFields.forEach((field) => field.setAttribute("placeholder", "your information"))
}

//Task 16
//When focused on any of the input fields change its border color to "#00ff00". Return the default border when unfocused.

document.querySelector('.b-16').onclick = function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.style.borderColor = "#00ff00";
		});

		input.addEventListener('blur', function () {
			input.style.borderColor = null;
		});
	});
};