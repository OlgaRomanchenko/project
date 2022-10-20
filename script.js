

const numberFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMuvieDB = {
    count:numberFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};



for (i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?','');
    const b = prompt('На сколько оцените  его','');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMuvieDB.movies[a] = b;
        console.log('done!');
    
    }else {
        console.log('Error');
        i--;
    }
    
}

if (personalMuvieDB < 10){
    console.log('Просмотрено мало фильмов!');
}else if (personalMuvieDB >= 10 && personalMuvieDB < 30 ){
    console.log('Вы классический зритель!');
}else if (personalMuvieDB >= 30){
    console.log('Вы киноиан!');
}else {
    console.log('Произошла ошибка!');
}

console.log(personalMuvieDB);