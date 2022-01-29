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

// IMAGE-CACHE

const seasons = ['winter', 'spring', 'summer', 'autumn']; 

seasons.forEach(element => {
  for (i=1; i<7; i++) {
    let img = new Image()
    img.src = `./assets/img/${element}/${i}.jpg`;
  }
})

// LIGHT-THEME

function makeLightTheme() {
  
  const sectionTitle1 = document.querySelector(".section-title-1")
  const sectionTitle2 = document.querySelector(".section-title-2")
  const sectionTitle3 = document.querySelector(".section-title-3")
  const sectionTitle4 = document.querySelector(".section-title-4")
 
  const sectionEng = document.querySelector(".eng")
  const sectionSlash = document.querySelector(".slash")
  const sectionRus = document.querySelector(".rus")
  const sectionName = document.querySelector(".name")
  const sectionDescr = document.querySelector(".description")
 
  const sectionBody = document.querySelector("body")
 
  const footer = document.querySelector("#footer")

  const wrappers = document.querySelectorAll(".wrapper")


  wrappers.forEach(element => {
    element.classList.toggle("backimg-titles")
  })

  sectionsTitles = [sectionTitle1, sectionTitle2, sectionTitle3, sectionTitle4, sectionBody]

  sectionsTitles.forEach(element => {
    element.classList.toggle("light-theme")
  })

  const sectionLangsAndHireText = [sectionEng, sectionSlash, sectionRus, sectionName, sectionDescr]

  sectionLangsAndHireText.forEach(element => {
    element.style.color = '#fff'
  })


  portfolioBtns.forEach(element => {
    element.classList.toggle("light-theme-hover")
  })

  footer.style.backgroundColor = '#000'

}

// SWITCHTHEMEFUNC

const switchBtn = document.querySelector(".theme-switch-btn")
switchBtn.addEventListener("click", makeLightTheme)





