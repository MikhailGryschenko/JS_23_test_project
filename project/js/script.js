/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBlock = document.querySelectorAll(".promo__adv");
adBlock.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').textContent = "Драма";

document.querySelector('.promo__bg').style.cssText = "background-image: url('img/bg.jpg')";


movieDB.movies.sort();

const films = document.querySelectorAll('.promo__interactive-item');
films.forEach (function(item, i) {
    item.insertAdjacentHTML("beforeend", `${i+1} ${movieDB.movies[i]} <div class="delete"></div>`);
});


