

const numberFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMuvieDB = {
    count:numberFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};

const answer1 = prompt('Один из последних просмотренных фильмов?','');
const answer2 = prompt('На сколько оцените  его','');
const answer3 = prompt('Один из последних просмотренных фильмов?','');
const answer4 = prompt('на сколько оцените его','');

personalMuvieDB[answer1]= answer2;
personalMuvieDB[answer3]=answer4;

console.log(personalMuvieDB);