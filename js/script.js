//Директива использования современного строгого кода
"use strict";

//Унарный плюс делает значение числовым типом
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
    console.log('correct1');
} else if (numberOfFilms <= 30) {
    alert('Вы классический зритель');
    console.log('correct1');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
    console.log('correct1');
} else {
    alert('Произошла ошибка!');
    console.log('error1');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let count = 0;
for (let i = 0; i < 2; i++) {
    const tmp1 = prompt("Один из последних просмотренных фильмов?", ""),
          tmp2 = prompt("На сколько вы оцените его?", "");
    if (tmp1 != '' && tmp2 != '' && tmp1 != null && tmp2 != null && tmp1.length < 50) {
        personalMovieDB.movies[tmp1] = tmp2;
        console.log('correct2');
    } else {
        alert('Вы ввели некорректные значения! Попробуйте ещё раз');
        i--;
        console.log('error2');
    }
}