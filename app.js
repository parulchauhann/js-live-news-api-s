// Progression 1: create a function and fetch the api using axios
let newsBtn = document.getElementById('btn-news')
let newsBoard = document.querySelector('.bulletin')

newsBtn.onclick = () =>{
    newsBoard.style.display = 'block'
    newsBoard.scrollIntoView({ behavior: 'smooth' });
}

let newsBox = document.getElementById('news-box')
function getNews() {
    axios
        .get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=274797695f8db2932df7c645e534139e")
        .then((response) => {
            console.log(response.data)
            createNews(response.data.articles)
        })
        .catch((error) => {
            console.log(error)
        })

function createNews(newsCollection) {
    newsCollection.forEach(element => {
        newsBox.innerHTML += `
        <div id="news-card">
      <h3 class="title">${element.title}</h3>
      <div class="img-card">
      <img src = ${element.image} class = "image">
      </div>
      <p class="news-desc">${element.content}</p>
    </div>
        `
    });
}}
getNews()