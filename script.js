let numberOfFilms;

function start() {
    numberOfFilms =  +prompt('Сколка филмов вы уже посмотрели', "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt('Сколка филмов вы уже посмотрели', "");
    }
}

start();

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных филмов', "").trim(),
              b = prompt('На сколко оцените его?', "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('erorr');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMuvieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMuvieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMuvieDB);
    }
}

showMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const gener = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMuvieDB.genres[i - 1] = gener;
    }
}

writeYourGenres();


