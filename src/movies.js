// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((element) =>
        element.director
    );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, genre = "drama", director = "Steven Spielberg") {
    return moviesArray.filter((element) =>
        element.genre.includes(genre) && (director === null ? true : element.director == director)
    ).length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray,) {
    return moviesArray.reduce((sum, element) =>
        sum += element.scoresAverage
    ) / moviesArray.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return moviesArray.reduce((sum, element) =>
        sum += (element.genre.includes(genre) ? element.scoresAverage : 0)
    ) / howManyMovies(moviesArray, "drama", null);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.splice(0).sort((a, b) =>
        (a.year - b.year) * 10 + a.name.localeCompare(b.name)
    );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.splice(0).sort((a, b) =>
        a.name.localeCompare(b.name)
    ).splice(0, 20).map((element) =>
        element.name
    );
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((element) =>
        element.duration = element.duration.split(' ').map((element2) =>
        (+element2[0].replace('h', '')) * 60 + (+element2[1].split("min", ''))
        )
    );
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
