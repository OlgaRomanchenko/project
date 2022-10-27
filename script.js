

let numberFilms;

function start(){
    numberFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while(numberFilms ==  '' ||  numberFilms == null || isNaN(numberFilms) ){
        numberFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    }
}
start();

const personalMuvieDB = {
    count:numberFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};



function rememberMyFilms(){
    for (i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?','').trim();
        const b = prompt('На сколько оцените  его','').trim();
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMuvieDB.movies[a] = b;
            console.log('done!');
        
        }else {
            console.log('Error');
            i--;
        }
        
    }
}

rememberMyFilms();


function detectPersonalLevel(){
    if (personalMuvieDB.count < 10){
        console.log('Просмотрено мало фильмов!');
    }else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30 ){
        console.log('Вы классический зритель!');
    }else if (personalMuvieDB.count >= 30){
        console.log('Вы киноиан!');
    }else {
        console.log('Произошла ошибка!');
    }
    
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMuvieDB);  
    }

}


showMyDB(personalMuvieDB.privat);

function whriteYourGenres(){
    for (let i = 1 ; i <= 3; i++ ){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMuvieDB.genres[i -1] = genre;
    }

}

whriteYourGenres();
