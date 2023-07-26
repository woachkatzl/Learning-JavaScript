// В следующей функции есть цикл for, который считает количество выбранных жанров в списке прокрутки (элемент <select> позволяет выбрать несколько элементов). Цикл for объявляет переменную i и задаёт ей значение 0. Также он проверяет, что i меньше количества элементов в элементе <select>, выполняет оператор if и увеличивает i на один после каждого прохода цикла. 

function howMany(select) {
    let numberSelected = 0;
    for (let i = 0; i < select.length; i++) {
        if (select.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

let btn = document.getElementById("btn");
const total = document.querySelector('.total');
btn.addEventListener("click", function () {
    total.innerHTML = 'Выбрано элементов: ' + howMany(document.selectForm.musicTypes);
});