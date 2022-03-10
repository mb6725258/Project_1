//Директива использования современного строгого кода
"use strict";

//Унарный плюс делает значение числовым типом
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms <= 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка!');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let tmp1,
    tmp2;
let count = 0;
while (count != 2) {
    tmp1 = prompt("Один из последних просмотренных фильмов?", "");
    tmp2 = prompt("На сколько вы оцените его?", "");
    if (tmp1 == '' || tmp2 == '' || tmp1 == null || tmp2 == null || tmp1.length > 50) {
        alert('Вы ввели некорректные значения!');
        continue;
    } else {
        personalMovieDB.movies[tmp1] = tmp2;
        count++;
    }
}

console.log(personalMovieDB);