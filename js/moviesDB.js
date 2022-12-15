let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
 

    },
    actors: {

    },
    genres: [],
    privat: false
};



function rememberMyFilms(Question) {
let rightAnswer = 0;

    while (rightAnswer < Question) {
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
}

rememberMyFilms(2);

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель.');
    } else if (personalMovieDB.count > 30){
    alert('Вы киноман');
    } else {
        alert('Произошла ошибка, некорректное значение.');
    }    
}

detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}


function writeYourGenres(Question){
    for (let i = 0; i < Question; i++){
       let genresQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`);
       personalMovieDB.genres[i] = genresQuestion;
    }
}
writeYourGenres(3);
showMyDB();

// console.log(Object.keys(personalMovieDB.movies).length);  Вычесление количтсва свойст объекта внутри объекта.


