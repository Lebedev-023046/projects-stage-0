// ACTIVEBUTTON

const birdList = document.querySelector(".birds-list")
const birdItemList = document.querySelectorAll(".bird-item")
const mainContainer = document.querySelector(".main")

const activeButton = (event) => {
    if (event.target.classList.contains("bird-item")) {
        birdItemList.forEach(element => {
            element.classList.remove("bird-active")
        })
        event.target.classList.add("bird-active")
        console.log(event.target.dataset.birdname)
        mainContainer.style.backgroundImage = `url(assets/img/${event.target.dataset.birdname}.jpg)`
    }
}

birdList.addEventListener("click", activeButton)


