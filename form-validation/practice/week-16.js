//Найдите все формы на странице. 

const allForms = document.forms;


//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
    //Ваш код
    const forms = document.forms;
    const formsAsArray = [...forms]; //turning collwction into an array to use the map method
    const formNames = formsAsArray.map(form => form.getAttribute("name"));
    paragraphFour.textContent = formNames.join(", ");
}

document.querySelector('.b-4').onclick = makeFour;


//Найти количество элементов в третьей форме на странице

const formThree = document.forms.formThree;
const numberofElements = formThree.elements.length;


//Выведите перечисление названий (name) всех элементов второй формы на экран.

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {

    const allElements = document.forms.formTwo.elements;
    const allElementsArray = [...allElements];
    const elementNames = allElementsArray.map(element => element.getAttribute("name"));
    paragraphSeven.textContent = elementNames.join(", ");
}

document.querySelector('.b-7').onclick = makeSeven;


//Выведите на экран значенеие radio кнопки четвёртой формы на странице

const paragraphTen = document.getElementById('practicum10');

function makeTen() {

    const radioBtn = document.forms.lastForm.elements.fourthName;
    paragraphTen.textContent = radioBtn.value;
}

document.querySelector('.b-10').onclick = makeTen;


//Выведите значения всех опций из первой формы

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {

    const options = document.forms.formOne.elements.firstSelect.options;
    const optionsArray = [...options];
    const optionsValuesArray = optionsArray.map(option => option.value);
    const optionsValues = optionsValuesArray.join(", ");
    paragraphEleven.textContent = optionsValues;
}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы

const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {

    const elements = document.forms.formTwo.elements;
    const checkboxElementsIds = [];
    for (i = 0; i < elements.length; i++) {
        if (elements[i].type === "checkbox") {
            const id = elements[i].getAttribute("id");
            checkboxElementsIds.push(id);
        }
    }
    paragraphTwelve.textContent = checkboxElementsIds.join(", ");
}

document.querySelector('.b-12').onclick = makeTwelve;


//Проверьте была ли выбрана кнопка четвёртой формы

const paragraphThirteen = document.getElementById('practicum13');

function checkButton(e) {

    e.preventDefault();
    const radioBtn = document.forms.lastForm.elements.fourthName;
    if (radioBtn.checked) {
        paragraphThirteen.textContent = "Кнопка выбрана";
    } else if (!radioBtn.checked) {
        paragraphThirteen.textContent = "Кнопка не выбрана";
    }
}

document.querySelector('.b-13').addEventListener('click', checkButton);


//Проверьте какой вариант выбран в первой форме

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {

    const select = document.forms.formOne.elements.firstSelect;
    select.selectedIndex = 1;
    if (select.value === "Опция 1") {
        paragraphFourteen.textContent = "Выбран первый вариант";
    } else if (select.value === "Опция 2") {
        paragraphFourteen.textContent = "Выбран второй вариант";
    } else if (select.value === "Опция 3") {
        paragraphFourteen.textContent = "Выбран третий вариант";
    }
}

document.querySelector('.b-14').onclick = checkOption;


//Проверьте, заполнены ли все поля первой формы перед отправкой. Очистите все поля первой формы после отправки

const formOne = document.forms.formOne;
const formOneError = document.querySelector("#errorMessage");

formOne.addEventListener('submit', function (event) {
    event.preventDefault(); //Отмена отправки

    const elements = formOne.elements;
    const [name, email, rest] = elements; //Сохранила поля ввода в переменные с помощью деструктуризации и rest
    if (!name.value || !email.value) {
        formOneError.textContent = "Пожалуйста, заполните все поля";
    } else if (name.value && email.value) {
        formOneError.textContent = "";

        formOne.reset();
    }
});


//При выборе определенной опции из выпадающего списка измените цвет фона страницы

const selectElement = document.forms.formOne.elements.firstSelect;

selectElement.onchange = function () {

    if (selectElement.selectedIndex === 0) {
        document.body.style.backgroundColor = "azure";
    } else if (selectElement.selectedIndex === 1) {
        document.body.style.backgroundColor = "bisque";
    } else if (selectElement.selectedIndex === 2) {
        document.body.style.backgroundColor = "mediumaquamarine ";
    }
};


//Добавьте валидацию для поля Email

const errorMessage = document.getElementById('errorMessage');

const emailInput = document.forms.formOne.elements.firstEmail;

emailInput.oninput = function () {

    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.+.[A-Z]{1,3}$/i;
    const valid = emailRegExp.test(emailInput.value);
    if (!valid) {
        emailInput.style.borderColor = "red";
        errorMessage.textContent = "Неправильный формат email";
    } else if (valid) {
        emailInput.style.borderColor = null;
        errorMessage.textContent = null;
    }
};


//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
    event.preventDefault();
    const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        document.getElementById('result21').textContent = 'Выберите как минимум один вариант';
    } else {
        document.getElementById('result21').textContent = 'Проверка пройдена';
    }
};


//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-22').onclick = function (event) {
    const nameInput = document.forms.formThree.elements.thirdName;

    if (nameInput.value.trim() === '') {
        document.getElementById('result22').textContent = 'Поле Имя не заполнено';
    } else {
        document.getElementById('result22').textContent = 'Проверка пройдена';
    }
};


//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.

const formBtn = document.forms.lastForm.elements.fourthButton;
const formRadio = document.forms.lastForm.elements.fourthName;
formBtn.disabled = true;

formRadio.onchange = function () {
    if (formRadio.checked) {
        formBtn.disabled = false;
    }
}


//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"

document.querySelector('.b-24').onclick = function () {

    const inputs = document.querySelectorAll('.form__input');
    inputs.forEach(input => input.setAttribute("placeholder", "Введите данные"));
};


//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
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

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const nameInputThree = formThree.elements.thirdName;
const emailInputThree = formThree.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
    event.preventDefault();

    if (nameInputThree.value && emailInputThree.value) {
        console.log(nameInputThree.value);
        console.log(emailInputThree.value);
    } else {
        console.log('Пожалуйста, заполните все поля формы.');
    }
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
    const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

    selectedOptions.forEach(option => console.log(option));
}