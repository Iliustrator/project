let numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: {

    },
    privat: false
}

let lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
let rateMovie = prompt ('На сколько оцените его', '');

personalMovieDB.movies[lastMovie] = rateMovie;

lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
rateMovie = prompt ('На сколько оцените его', '');

personalMovieDB.movies[lastMovie] = rateMovie;
console.log(personalMovieDB);