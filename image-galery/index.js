const galeryContainer = document.querySelector(".container")

function createElement(imgData) {
    const div = document.createElement("div")
    div.classList.add("img")
    div.style.backgroundImage = `url(${imgData})`;
    galeryContainer.append(div)
}

const cancelBtn = document.querySelector(".cancel-button")

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();

    data.results.forEach(element => {
        createElement(element.urls.regular)
    }); 
  }

const searchBtn = document.querySelector(".search-button")
const input = document.querySelector(".search-input")

const workflow = () => {
    const inputValue = document.querySelector(".search-input").value
    const url = `https://api.unsplash.com/search/photos?query=${inputValue}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    getData(url)
}

searchBtn.addEventListener("click", workflow)
input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        workflow()
    }
})

cancelBtn.addEventListener("click", () => {
    input.value = ''
})

