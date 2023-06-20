// Вам предлагается реализовать функционал добавления задачи на веб-страницу. 
// Внутри обработчика события получите значение, введённое в поле ввода (используйте свойство value поля ввода). Создайте новый элемент списка (<li>) с помощью метода createElement. Установите текст задачи внутри созданного элемента списка, используя свойство textContent. Добавьте созданный элемент списка в нужное место на странице, внутрь элемента <ul>, используя метод append.

// Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Обработчик события клика на кнопку "Добавить"
addButton.addEventListener('click', function () {
    // ваш код
    const taskListItem = document.createElement("li");
    taskListItem.textContent = taskInput.value;
    taskList.append(taskListItem);
});