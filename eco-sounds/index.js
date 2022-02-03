let isPlay = false

// ACTIVEBUTTON

const birdList = document.querySelector(".birds-list")
const birdItemList = document.querySelectorAll(".bird-item")
const mainContainer = document.querySelector(".main")

const audio = document.querySelector(".audio-block")


// PLAYPAUSESWITCH

const playBtn = document.querySelector(".play")

const changeCondition = () => {
    playBtn.classList.toggle("pause")
    if ((playBtn.classList.contains("pause"))) {
        isPlay = true
    }else{
        isPlay = false
    }
}

playBtn.addEventListener("click", changeCondition)


// PLAYFUNCTION

const playAudio = () => {
    if (!(isPlay)) {
        audio.pause()
    }else{
        audio.play()
    } 
}

playBtn.addEventListener("click", playAudio)

const activeButton = (event) => {
    playBtn.classList.remove("pause")
    if (event.target.classList.contains("bird-item")) {
        birdItemList.forEach(element => {
            element.classList.remove("bird-active")
        })
        event.target.classList.add("bird-active")
        mainContainer.style.backgroundImage = `url(assets/img/${event.target.dataset.birdname}.jpg)`
        audio.src = `assets/audio/${event.target.dataset.birdname}.mp3`
    }
}

birdList.addEventListener("click", activeButton)



