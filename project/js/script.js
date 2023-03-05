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

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 21)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }
        
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = "Драма";
        document.querySelector('.promo__bg').style.cssText = "background-image: url('img/bg.jpg')";
        /* или document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; */
    };
    

    const sortArr = (arr) => {
        arr.sort();
    }
    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach (function (item, i) {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
    

    deleteAdv(adBlock);
    makeChanges();
    createMovieList(movieDB.movies, list);

});

/* Задание:

В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:

Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

        amountOfPages(5) => 5

        amountOfPages(25) => 17

        amountOfPages(1095) => 401   

        amountOfPages(185) => 97 */

/* function amountOfPages(summary){
    let balance = summary;
    let page = 0;
    while (balance > 0) {
        ++page;
        balance = balance - page.toString().length;
    }
    return page;
} */

/* function amountOfPages(summary) {
    let counter = 0;
    let i = 0;
    while (counter < summary) {
        i++;
        counter += (i+'').length;
    }
    return i;
} */

/* function amountOfPages(summary){
    let result = ''; 
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
  } */

/* function isPangram(string) {
    let str = '';
    let codes = [];
    str = string.toLowerCase().replace(/\s/g,'');
    for (let i=0; i < str.length; i++) {
        codes.push(str.codePointAt(i));
    }
    const set = new Set(codes);
    if (set.size == 26) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
    
}

isPangram("The quick brown fox jumps over the lazy dog"); */
/* console.log(isPangram("The five boxing wizards jump quickly")); */

/* let arr = Array.from(
    new Set(string.toLowerCase().split(" ").join("").split("")),
  );

return arr.length == 26 ? true : false; */

/* function isPangram(string) {
    let alphabet = new Set(Array.from(string.toLowerCase()).sort());
    alphabet.delete(' ');
    let alf = '';
    alphabet.forEach(item => alf += item);
    return (alf === 'abcdefghijklmnopqrstuvwxyz');
} */


function deepCount(a) {
    let sum = a.length;
    a.forEach(function(item) {
        if (Array.isArray(item)) {
            sum += deepCount(item);
        }
    });
    return sum;
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
