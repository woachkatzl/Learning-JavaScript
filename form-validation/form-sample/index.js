//VARIABLES
const form = document.forms.myForm;
const inputs = form.querySelectorAll("input, select");

const password = form.elements.password;
const passwordRepeat = form.elements.passwordRepeat;

let errors = [];

//FUNCTIONS

//Формула для проверки элемента формы на правильность заполнения
const checkInput = (input) => {

    const validity = input.validity;

    // Проверяем каждый input и select элемент формы на соответствие применяемым к ним правилам
    if (validity.patternMismatch || validity.typeMismatch) {
        errors.push("Неправильный формат заполнения"); // Если находится нессответствие, функция добавляет строку с сообщением об ошибке в массив errors
    }

    if (validity.tooLong) {
        const maxLength = input.maxLength;
        errors.push(`Максимальное количество символов: ${maxLength}`);
    }

    if (validity.tooShort) {
        const minLength = input.minLength;
        errors.push(`Минимальное количество символов: ${minLength}`);
    }

    //Проверка на заполненность обязательных полей
    if (input.hasAttribute("required") && validity.valueMissing) {
        errors.push("Обязательное поле для заполнения");
    }
};

//Формула для проверки на совпадение паролей
const checkPasswordMatch = (input) => {

    if (input === passwordRepeat && password.value !== passwordRepeat.value) {
        errors.push("Пароли должны совпадать");
    }
}

//Функция, которая добавляет сообщение об ошибке и применяет соответствующие стили к элементу формы, если он не заполнен или неверно заполнен
const checkErrors = (input) => {

    //Если после проверки элемента массив ошибок не пустой, добавляются стили и сообщение об ошибке
    if (errors[0]) {
        if (input.classList.contains("is-invalid")) { //Если поле уже содержало иформацию об ошибке, сообщение об ошибке удаляется, чтобы в случае повторной ошибки не выводилось два одинаковых сообщения
            input.parentNode.lastChild.remove();
        }
        input.classList.add("is-invalid"); //Добавляем класс со стилем ошибки к элементу,
        const errorMsg = document.createElement("p"); //создаем новый элемент для сообщения об ошибке,
        errorMsg.innerHTML = errors.join("<br>"); //добавляем в него сообщения из массива errors, каждое на новой строке,
        errorMsg.classList.add("text-danger"); //стилизуем его,
        input.parentNode.append(errorMsg); //вставляем в конец родителя input,
        errors = []; //очищаем массив ошибок для проверки следующего элемента
    }

    //Если после проверки элемента массив ошибок пустой, но элемент уже содержит стили и сообщение об ошибке, убираем их
    else if (!errors[0] && input.classList.contains("is-invalid")) {
        input.parentNode.lastChild.remove(); //Убираем последний элемент в родителе input элемента, потому что всегда добавляем ошибку в конец родителя
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

    //Если ошибок нет, поле подсветится зелёным. Кроме кнопок радио, с ними это выглядит странно
    else if (input.type !== "radio") {
        input.classList.add("is-valid");
    }
};

//Функция, которая проверяет все элементы в коллекции
const checkAllInputs = (inputs) => {

    for (let input of inputs) {
        checkInput(input);
        checkPasswordMatch(input);
        checkErrors(input);
    };
};

//Функция для динамической проверки полей
const checkCurrentInput = (event) => {
    checkInput(event.target);
    checkPasswordMatch(event.target);
    checkErrors(event.target);
};

//Функция, которая собирает все значения элементов формы и выводит их в консоль
const getFormInfo = (inputs) => {

    for (let input of inputs) {
        const name = input.name; //Обозначение типа данных в списке-результате
        let value = ""; //Значение данных

        if (input.type === "radio" && input.checked) { //Если элемент - кнопка радио, то выбранный вариант присвоит переменной value значние своего id. Не выбранные варианты функция не затрагивает.
            value = input.id;
            const result = `${name}: ${value}`;
            console.log(result);
        } else if (input.type !== "radio") { //Для остальных типов элементов вэтой форме значениие value равно атрибуту value элемента
            value = input.value;
            const result = `${name}: ${value}`;
            console.log(result);
        }
    }
};

//Функция обрабочик события submit этой формы. Проверяет полноту и правильность заполнения формы и в случае успеха, выводит данные в консоль и сбрасывает все поля формы
const handleSubmit = (event) => {
    event.preventDefault();

    let formValid = true; //При запуске каждой провки формы, значение formValid ставится true, чтобы ошибки предыдущей попытки проверки формы не влияли на новую проверку 

    checkAllInputs(inputs);

    //Если хоть одно поле содержит ошибку, значение formValid ставится false
    for (let input of inputs) {
        if (input.classList.contains("is-invalid")) {
            formValid = false;
        }
    }

    //Если значение formValid остаётся true после проверки, отправляем данные в консоль
    if (formValid) {
        getFormInfo(inputs);
        form.reset();
    }
};

//EVENT LISTENERS
form.addEventListener("submit", handleSubmit);

for (let input of inputs) {
    input.addEventListener("change", checkCurrentInput);
}