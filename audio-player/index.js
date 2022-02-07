const song1 = {
    background: "assets/img/dontstartnow.png",
    picture:    "assets/img/dontstartnow.png",
    name:       "Don't Start Now",
    executer:   "Dua Lipa",
    src:        "assets/audio/dontstartnow.mp3"
}

const song2 = {
    background: "assets/img/rockmafia.jpg",
    picture:    "assets/img/rockmafia.jpg",
    name:       "Friends",
    executer:   "Aura Dione feat. Rock Mafia",
    src:        "assets/audio/friends.mp3"
}

const song3 = {
    background: "assets/img/maynard.jpg",
    picture:    "assets/img/maynard.jpg",
    name:       "Royalty",
    executer:   "Conor Maynard",
    src:        "assets/audio/royalty.mp3"
}

const song4 = {
    background: "assets/img/lemonade.png",
    picture:    "assets/img/lemonade.png",
    name:       "Don't hurt yourself",
    executer:   "Beyonce",
    src:        "assets/audio/beyonce.mp3"
}

const song5 = {
    background: "assets/img/degraw.jpg",
    picture:    "assets/img/degraw.jpg",
    name:       "Fire",
    executer:   "Gavin DeGraw",
    src:        "assets/audio/fire.mp3"
}

const song6 = {
    background: "assets/img/greenday.jpg",
    picture:    "assets/img/greenday.jpg",
    name:       "Holiday",
    executer:   "Green Day",
    src:        "assets/audio/holiday.mp3"
}

const song7 = {
    background: "assets/img/legend.jpg",
    picture:    "assets/img/legend.jpg",
    name:       "All of me",
    executer:   "John Legend",
    src:        "assets/audio/allofme.mp3"
}

const song8 = {
    background: "assets/img/lsd.jpg",
    picture:    "assets/img/lsd.jpg",
    name:       "Genius",
    executer:   "LSD feat. Sia, Diplo, Labrinth",
    src:        "assets/audio/genius.mp3"
}

const song9 = {
    background: "assets/img/rockmafia.jpg",
    picture:    "assets/img/rockmafia.jpg",
    name:       "Fly of dye",
    executer:   "Rock Mafia",
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


play.addEventListener("click", playSwitsh)
play.addEventListener("click", playSound)

