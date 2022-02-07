let playNum = 0

const song1 = {
    background: "assets/img/rockmafia.jpg",
    picture:    "assets/img/rockmafia.jpg",
    name:       "Friends",
    executor:   "Aura Dione feat. Rock Mafia",
    src:        "assets/audio/friends.mp3"
}

const song2 = {
    background: "assets/img/dontstartnow.png",
    picture:    "assets/img/dontstartnow.png",
    name:       "Don't Start Now",
    executor:   "Dua Lipa",
    src:        "assets/audio/dontstartnow.mp3"
}

const song3 = {
    background: "assets/img/maynard.jpg",
    picture:    "assets/img/maynard.jpg",
    name:       "Royalty",
    executor:   "Conor Maynard",
    src:        "assets/audio/royalty.mp3"
}

const song4 = {
    background: "assets/img/lemonade.png",
    picture:    "assets/img/lemonade.png",
    name:       "Don't hurt yourself",
    executor:   "Beyonce",
    src:        "assets/audio/beyonce.mp3"
}

const song5 = {
    background: "assets/img/degraw.jpg",
    picture:    "assets/img/degraw.jpg",
    name:       "Fire",
    executor:   "Gavin DeGraw",
    src:        "assets/audio/fire.mp3"
}

const song6 = {
    background: "assets/img/greenday.jpg",
    picture:    "assets/img/greenday.jpg",
    name:       "Holiday",
    executor:   "Green Day",
    src:        "assets/audio/holiday.mp3"
}

const song7 = {
    background: "assets/img/legend.jpg",
    picture:    "assets/img/legend.jpg",
    name:       "All of me",
    executor:   "John Legend",
    src:        "assets/audio/allofme.mp3"
}

const song8 = {
    background: "assets/img/lsd.jpg",
    picture:    "assets/img/lsd.jpg",
    name:       "Genius",
    executor:   "LSD feat. Sia, Diplo, Labrinth",
    src:        "assets/audio/genius.mp3"
}

const song9 = {
    background: "assets/img/rockmafia.jpg",
    picture:    "assets/img/rockmafia.jpg",
    name:       "Fly of dye",
    executor:   "Rock Mafia",
    src:        "assets/audio/flyordye.mp3"
}

const songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9]

const audio = document.querySelector("audio")

// ADDCOMMONSONGTIME

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) 
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

const commonTime = document.querySelector(".common")
audio.addEventListener("loadeddata", () => {
    commonTime.textContent = getTimeCodeFromNum(audio.duration)
})

//CHANGETIMELINE
const timeline = document.querySelector(".timeline")
const progress = document.querySelector(".progress")

timeline.addEventListener("click", (event) => {
    const timelineWidth = window.getComputedStyle(timeline).width
    const timeToSeek = event.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek
    progress.style.width = `${event.offsetX}px`
})



// CHANGEPLAYBTN
const play = document.querySelector(".play")

const playSwitsh = () => {
    play.classList.toggle("pause")
}


// PLAYPAUSEVOLUME
const playSound = () => {
    if (play.classList.contains("pause")) {
        audio.play()
    }else{
        audio.pause()
    }
}

//CHANGETIMEANDFILLPROGRESS
setInterval(() => {
    progress.style.width = `${audio.currentTime / audio.duration * 100}%`
    const currentTime = document.querySelector(".current")
    currentTime.textContent = getTimeCodeFromNum(audio.currentTime)
})

//CHANGESONG
changeSong = () => {
    const background = document.querySelector(".background")
    const picture = document.querySelector(".audio-image")
    const name = document.querySelector(".song-name")
    const executor = document.querySelector(".exec-name")
    const audio = document.querySelector("audio")

    background.src = songs[playNum]['background']
    picture.src = songs[playNum]['picture']
    name.textContent = songs[playNum]['name']
    executor.textContent = songs[playNum]['executor']
    audio.src = songs[playNum]['src']
}

const forward = document.querySelector(".forward")
const backward = document.querySelector(".backward")

const footer = document.querySelector(".footer")
console.log(footer)
const indexes = [1, 3, 6, 7]

forward.addEventListener("click", () => {
    playNum += 1;
    if (playNum === 9) {
        playNum = 0
    }
    console.log(playNum)
    if (indexes.includes(playNum)) {
        footer.classList.add("footer2")
    }else{
        footer.classList.remove("footer2")
    }
    changeSong()
    playSound()
})

backward.addEventListener("click", () => {
    playNum -= 1;
    if (playNum === -1) {
        playNum = 8
    }
    changeSong()
    playSound()
})



play.addEventListener("click", playSwitsh)
play.addEventListener("click", playSound)

