/* Данные приходят в консоль. Шутки находятся в свойстве value. Её нужно вставить в DOM-элемент.
1. Создайте переменную joke и присвойте ей элемент с классом joke;
2. Замените console.log на выражение вставляющее текст шутки в элемент joke */

// найдите 2 переменные: шутка и кнопка
const joke = document.querySelector(".joke");
const button = document.querySelector(".header__btn");

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then((data) => {
            // ваш код
            joke.textContent = data.value;
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен');
        });
}

// добавьте слушатель события на кнопку и передайте в коллбек функцию getJoke 
button.addEventListener("click", getJoke);