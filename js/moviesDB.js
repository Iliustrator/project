"use strict";

let personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {
        a: 1,
        b: 2
    },
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (Question) {
        let rightAnswer = 0;
        while (rightAnswer < Question) {
            let lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
            if (lastMovie != null){
                lastMovie = lastMovie.trim();
            }
            while (lastMovie == null || lastMovie.length > 50 || lastMovie == '') {
                alert('Введены некорректные данные');
                lastMovie = prompt ('Один из последних просмотренных фильмов?', '');
                if (lastMovie != null){
                    lastMovie = lastMovie.trim();
                }
            }
            let rateMovie = prompt ('На сколько оцените его', '');
            while (rateMovie == null || +rateMovie.length > 2 || rateMovie > 10 || rateMovie == ''|| isNaN(rateMovie)) {
                alert('Введены некорректные данные');
                rateMovie = prompt ('На сколько оцените его', '');
            }
            rightAnswer += 1;
            personalMovieDB.movies[lastMovie] = rateMovie;
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы классический зритель.');
        } else if (personalMovieDB.count > 30){
        alert('Вы киноман');
        } else {
            alert('Произошла ошибка, некорректное значение.');
        }    
    },
    showMyDB: function (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (Question){
        for (let i = 0; i < Question; i++){
           let genresQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`);
           while (genresQuestion == null || genresQuestion == ''){
            alert('Введены некорректные данные');
            genresQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`);
           }
           personalMovieDB.genres[i] = genresQuestion;
        }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index+1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function (){
        personalMovieDB.privat = personalMovieDB.privat == true ? false : true;
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms(2);
personalMovieDB.writeYourGenres(3);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();



