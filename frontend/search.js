const content = document.getElementById('content');
const searcher = document.getElementById('searcher');
var movies = []
const LoadMovies = async () => {
    const res = await fetch('../backend/videos.json')
    movies = await res.json()
    Display(movies)
}
searcher.addEventListener('keyup', (e) => {
    const searchquery = e.target.value
    const filteredmovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchquery.toLowerCase())
    })
    Display(filteredmovies)
})


function Display(params) {
    const Value = params.map((params) => {
        return `<div class="card">
        <li>
            <a title="${params.title}" href="">
                <ion-icon class="playicon" name="play-circle-outline"></ion-icon>
                <img loading="lazy" class="image" src="${params.image}" alt="">
                <br>
                <h3 class="title">${params.title}</h3>
            </a>
            <br>
            <p class="time">${params.time}</p>
        </li>
    </div>`;
    }).join('');
    content.innerHTML = Value;
}
LoadMovies()