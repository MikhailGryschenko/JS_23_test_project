/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    movieDB.movies.sort();
    
    const adBlock = document.querySelectorAll(".promo__adv img"),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();


        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adBlock);

    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = "Драма";
        document.querySelector('.promo__bg').style.cssText = "background-image: url('img/bg.jpg')";
        /* или document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; */
    };
    
    makeChanges();
    
    movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = "";

    
        films.forEach (function (item, i) {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });
    }
    
    createMovieList(movieDB.movies, list);


});



