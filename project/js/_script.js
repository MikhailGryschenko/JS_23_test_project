'use strict';

/* const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
]; */

/* function showGoodFilms(arr) {
    const goodFilms = arr.filter(item => item.rating >= 8);
    return goodFilms;
}

showGoodFilms(films); */

/* function showListOfFilms(arr) {
    const listOfFilms = arr.map(item => item.name).join(', ');
    return listOfFilms;
}

showListOfFilms(films); */

/* function setFilmsIds(arr) {
    //return arr.map((items, index) => ({ ...items, id: index }));
    return arr.map((item, i) => {
        item.id = i;
        return item;
    });
}
console.log(setFilmsIds(films)); */

//const tranformedArray = setFilmsIds(films);

/* function checkFilms(arr) {
    //return arr.every(item => item.hasOwnProperty('id'));
    return arr.every(item => "id" in item);
}

console.log(checkFilms(films)); */


/* const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount >= 0).reduce((x, y) => x + y.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if(data.some(item => item.amount < 0)) {
        return data.reduce((x, y) => x + y.amount, 0);
    } else {
        return getPositiveIncomeAmount(data);
    }
};

console.log(getTotalIncomeAmount(funds)); */

/* class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Grischenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname (surname) {
        this.#surname = surname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 100) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const mika = new User ('Mikhail', 49);
mika.surname = 'Petrov';
console.log(mika.surname);
mika.say(); */
