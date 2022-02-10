window.addEventListener("load", () => {
    const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=Fq7hh0Mo_F3rW4iibqBcY3Eh__wCZa8k5mQroyg9hlU";
    getData(url)
})

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

    const container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    data.results.forEach(element => {
        createElement(element.urls.regular)
    }); 

    container.addEventListener("click", openImg)
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

//CLEARSEARCHAREA
cancelBtn.addEventListener("click", () => {
    input.value = ''
})

const container = document.querySelector(".container")

const openImg = (event) => {
    const imageDivs = galeryContainer.querySelectorAll(".img")
    if (event.target.classList.contains("img")) {
        if (!(event.target.classList.contains("bigImg"))) {
            event.target.classList.add("bigImg")
        }else {
            imageDivs.forEach(element => element.classList.remove("bigImg"))
        }
    }
}

