let api = 'https://omdbapi.com/?apikey=b11fba2e&t=';

let title = document.querySelector('#Title');
let plot = document.querySelector('#Plot');
let actors = document.querySelector('#Actors');
let director = document.querySelector('#Director');
let awards = document.querySelector('#Awards');
let languages = document.querySelector('#Language');
let collection = document.querySelector('#BoxOffice');
let genre = document.querySelector('#Genre');
let imdbRatings = document.querySelector('#imdbRatings');
let poster = document.querySelector('#poster');
let year = document.querySelector('#Year');
let container = document.querySelector('#container');
container.classList.add('hidden');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.Suggestion');

function SearchMovie(){
    let MovieName = document.querySelector('#MovieName');
    let list = api + MovieName.value;
    fetch(list).then(data => data.json()).then(data=>{
        error.classList.add('hidden');
        if(data.Error === 'Movie not found!'){
            error.classList.remove('hidden');
            error.innerText = 'Movie not found!'
            container.classList.add('hidden');
        }
        else {
        container.classList.remove('hidden');
        title.innerText = data.Title;
        plot.innerText = data.Plot;
        actors.innerText = data.Actors;
        director.innerText = data.Director;
        awards.innerText = data.Awards;
        languages.innerText = data.Languages;
        collection.innerText = data.BoxOffice;
        year.innerText = data.Year;
        genre.innerText = data.Genre;
        imdbRatings.innerText = data.imdbRating;
        poster.src = data.Poster;
        if(data.imdbRating > 7.5) {
            suggestion.innerText = 'Worth Watching';
            suggestion.style.backgroundColor = 'green'
        }
        else if(data.imdbRating > 6 && data.imdbRating < 7.5) {
            suggestion.innerText = 'Average';
            suggestion.style.backgroundColor = 'Yellow'
        }
        else {
            suggestion.innerText = 'Time Waste';
            suggestion.style.backgroundColor = 'Red';
        }
        }
    })
}