//Директива использования современного строгого кода
"use strict";

//Унарный плюс делает значение числовым типом
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
      lastFilm1Rate = prompt("На сколько вы оцените его?", ""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
      lastFilm2Rate = prompt("На сколько вы оцените его?", "");

personalMovieDB.movies[lastFilm1] = lastFilm1Rate;
personalMovieDB.movies[lastFilm2] = lastFilm2Rate;

//Обязательны косые кавычки
alert(`Вы недавно посмотрели фильмы ${lastFilm1}(${lastFilm1Rate}) и ${lastFilm2}(${lastFilm2Rate})`);