let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
 

    },
    actors: {

    },
    genres: {

    },
    privat: false
};

let rightAnswer = 0;
let rightQuestion = 2;

while (rightAnswer < rightQuestion) {
    let lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
    while (lastMovie == null || lastMovie.length > 50 || lastMovie == '') {
        alert('Введены некорректные данные');
        lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
    }
    let rateMovie = prompt ('На сколько оцените его', '');
    while (rateMovie == null || rateMovie.length > 50 || rateMovie == '') {
        alert('Введены некорректные данные');
        rateMovie = prompt ('На сколько оцените его', '');
    }
    rightAnswer += 1;
    personalMovieDB.movies[lastMovie] = rateMovie;
}

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
alert('Вы классический зритель.');
} else if (personalMovieDB.count > 30){
alert('Вы киноман');
} else {
    alert('Произошла ошибка, некорректное значение.');
}
console.log(personalMovieDB);

