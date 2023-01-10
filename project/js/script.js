'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertisement = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const poster = document.querySelector('.promo__bg');

advertisement.forEach(item => {
    item.remove();
});

genre.innerText = 'Драма';
poster.style.cssText = 'background: url(img/bg.jpg)';

const filmsList = document.querySelector('.promo__interactive-list');

function createFilmList () {
    movieDB.movies.sort();
    filmsList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        filmsList.innerHTML += 
            `<li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
            </li>`;
    });
}
createFilmList();

const addFilmBtn = document.querySelector('.add button');
const addFilmInput = document.querySelector('.adding__input');

const addFilmWithForm = (e) => {
    e.preventDefault();
    let inputValue = addFilmInput.value;
    
    function increaseFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (inputValue){
        inputValue = increaseFirstLetter(inputValue);
        if (inputValue.length > 21 ){
            inputValue = `${inputValue.slice(0, 22)}...`;
        }
        
        movieDB.movies.push(inputValue);
        
        if (checkbox.checked === true){
            console.log('Добавляем любимый фильм');
        }

        createFilmList();
        deleteFilm();
        e.currentTarget.parentElement.reset();
    }

};

addFilmBtn.addEventListener('click', addFilmWithForm);

const deleteFilmEvent = (e, i) => {
    e.currentTarget.parentElement.remove();
    movieDB.movies.splice(i,1);
    createFilmList();
    deleteFilm();
};

function deleteFilm (){
    const deleteFilmBtn = document.querySelectorAll('.delete');
    return deleteFilmBtn.forEach(item => {
        item.addEventListener('click', deleteFilmEvent);
    });
}
deleteFilm();

const addFilmForm = document.querySelector('.add').childNodes;
let checkbox;
addFilmForm.forEach (item => {
    if (item.type === 'checkbox') {
        checkbox = item;
    }
});
console.log(checkbox.checked);

