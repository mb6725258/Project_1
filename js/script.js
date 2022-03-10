"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilm1Rate = prompt("На сколько вы оцените его?", "");

const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilm2Rate = prompt("На сколько вы оцените его?", "");

personalMovieDB.movies = {
    lastFilm1: lastFilm1Rate,
    lastFilm2: lastFilm2Rate
};

alert(`Вы недавно посмотрели фильмы ${lastFilm1}(${lastFilm1Rate}) и ${lastFilm2}(${lastFilm2Rate})`);