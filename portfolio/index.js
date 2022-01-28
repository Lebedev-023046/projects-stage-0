// ADAPTIVEMENU

const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector(".nav-list")

const toggleMenu = () => {
    hamburger.classList.toggle("open-icon")
    navigation.classList.toggle("open")
}

hamburger.addEventListener("click", toggleMenu)

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
      hamburger.classList.remove("open-icon");
      navigation.classList.remove("open");
    }
  }

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));


// ACTIVE-BUTTON

const portfolioBtns = document.querySelectorAll(".portfolio-btn")

portfolioBtns.forEach(element => element.addEventListener("click", changeImage))

function changeClassActive() {
  portfolioBtns.forEach(element => element.addEventListener("click", () => {
    portfolioBtns.forEach(element => element.classList.remove("active"))
    element.classList.add('active')
  }))
}

changeClassActive()


// IMAGES-FROM-DIFFERENT-SEASONS

portfolioImgs = document.querySelectorAll(".portfolio-img")

function changeImage(event) {
  if (event.target.classList.contains('portfolio-btn')) {
    portfolioImgs.forEach((element, index) => element.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  } 
}


