const addButton = document.getElementById('addButton');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.add-news');
const submitBtn = document.getElementById('submitButton');
const addNewsTitle = document.getElementById('addNewsTitle');
const addNewsText = document.getElementById('addNewsText');
const addNewsImage = document.getElementById('addNewsImage');
const newsContainer = document.getElementById('newsContainer');

addButton.addEventListener('click', ()=>{
    overlay.style.display = 'block'
    modal.style.display = 'block'
})

submitBtn.addEventListener('click', ()=>{
    const news = document.createElement('div')
    const newTitle = document.createElement ('h1')
    const newText = document.createElement ('p')
    newTitle.innerHTML = addNewsTitle.value;
    newText.innerHTML = addNewsText.value;
    news.classList.add('news')
    newTitle.classList.add('news-title');
    newText.classList.add('news-text');

    news.appendChild(newTitle);
    news.appendChild(newText);

    newsContainer.appendChild(news);

    overlay.style.display = 'none'
    modal.style.display = 'none'
})

overlay.addEventListener('click', ()=> {
    overlay.style.display = 'none'
    modal.style.display = 'none'
})