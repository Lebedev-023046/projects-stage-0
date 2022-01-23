const hamburger = document.querySelector(".hamburger")

const toggleMenu = () => {
    hamburger.classList.toggle("open")
}

hamburger.addEventListener("click", toggleMenu)