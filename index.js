//  grabbing elements from HTML 
const moviesWrapper = document.querySelector(".movies")
const searchName = document.querySelector('.searchName')

//  handling the search 
function searchChange(event){
    renderMovies(event.target.value)
    searchName.innerHTML = event.target.value
}
//  global  movies variable 
let currentMovies = []




//  rendering movies / calling api
async function renderMovies(searchTerm){
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=858b2ce0`)
    const data = await response.json('')
    moviesWrapper.classList += ' movies__loading'
    if (!movie){
        movie = await renderMovies
    }

    moviesWrapper.classList.remove('movies__loading')
    currentMovies = data.Search
    displayMovies(currentMovies)
  
    
}

//  displaying movies 
function displayMovies(movieList){
       moviesWrapper.innerHTML = movieList.slice(0, 6).map((movie) => {
        return`
        <div class="movie">
        <figure class="movie__reel--img--wrapper">
        <img class="movie__poster" src="" alt="">
        </figure>
        <img class="movie__poster" src="${movie.Poster}" alt="">
        <h2 class="movie__title">${movie.Title}</h2>
        <h4 class="movie__year">${movie.Year}</h4>
        <button class="learn__more--btn">Learn More</button>
        </div>
        `
     }).join("")


}
// sorting movies
function sortChange(event){
    const sortOption = event.target.value
   
   let sortedMovies =[...currentMovies]
   
    if (sortOption === "NEWEST_TO_OLDEST"){ sortedMovies.sort((a,b) => b.Year - a.Year)

    }
    else if ( sortOption === " OLDEST_TO_NEWEST"){sortedMovies.sort((a,b) => a.Year - b.Year)

    }

    displayMovies(sortedMovies)
}

// loading 

