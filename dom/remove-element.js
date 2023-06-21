// Есть список сообщений

// При помощи JavaScript для каждого сообщения добавьте слушатель события на крестик (один элемент - один слушатель), который по нажатию удаляет <div>
const horse = document.querySelector(".remove-button-horse");
const donkey = document.querySelector(".remove-button-donkey");
const cat = document.querySelector(".remove-button-cat");

horse.addEventListener("click", function () {
    horse.closest(".horse").remove();
});

donkey.addEventListener("click", function () {
    donkey.closest(".donkey").remove();
});

cat.addEventListener("click", function () {
    cat.closest(".cat").remove();
});