const numberOfFilms = prompt('Сколка филмов вы уже посмотрели', "");
const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных филмов', ""),
      b = prompt('На сколко оцените его?', ""),
      c = prompt('Один из последних просмотренных филмов', ""),
      d = prompt('На сколко оцените его?', "");
      
    personalMuvieDB.movies[a] = b;
    personalMuvieDB.movies[c] = d;
    

console.log(personalMuvieDB);



