
// TRANSLATE

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

function translate(lang) {
  const text = document.querySelectorAll("[data-i18n]")
  text.forEach(element => {
    element.textContent = i18Obj[lang][element.dataset.i18n]
  })
}

// ADAPTIVEMENU

const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector(".nav-list")
const burgerLines = document.querySelectorAll(".line")
const sectionBody = document.querySelector("body")

const toggleMenu = () => {
    hamburger.classList.toggle("open-icon")

    if (sectionBody.classList.contains("light-theme")) {
      burgerLines.forEach(element => {
        element.classList.toggle("bgb")
      })
    }
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

  const navList = document.querySelector(".nav-list")

  navList.classList.toggle("bgcw")

  navLinks.forEach(element => {
    element.classList.toggle("bc")
  })

  wrappers.forEach(element => {
    element.classList.toggle("backimg-titles")
  })

  sectionsTitles = [sectionTitle1, sectionTitle2, sectionTitle3, sectionTitle4, sectionBody]

  sectionsTitles.forEach(element => {
    element.classList.toggle("light-theme")
  })

  const sectionLangsAndHireText = [sectionEng, sectionSlash, sectionRus, sectionName, sectionDescr]

  sectionLangsAndHireText.forEach(element => {
    element.classList.add("wc")
  })


  portfolioBtns.forEach(element => {
    element.classList.toggle("light-theme-hover")
  })

  footer.style.backgroundColor = '#000'

  getCurrentTheme()
}

// SWITCHTHEMEFUNC

const switchBtn = document.querySelector(".theme-switch-btn")
switchBtn.addEventListener("click", makeLightTheme)

// ACTIVELANGBTN

const langBtns = document.querySelector(".langs-switch").addEventListener("click", (event) => {
  const sectionEng = document.querySelector(".eng")
  const sectionSlash = document.querySelector(".slash")
  const sectionRus = document.querySelector(".rus")

  const langSwitchElems = [sectionEng, sectionSlash, sectionRus]

  langSwitchElems.forEach(element => {
    element.classList.remove("lang-active")
  })
  if (!(event.target === sectionSlash)){
    event.target.classList.add("lang-active")
    commonLang = event.target.innerText
    translate(event.target.innerText)
  }
})


// LOCALSTORAGEINFO

const getCurrentTheme = () => {
  if (sectionBody.classList.contains("light-theme")) {
    mainTheme = "light"
  }else {
    mainTheme = "black"
  }
  return mainTheme
} 

switchBtn.addEventListener("click", () => {
  
})

function setLocalStorage() {
  localStorage.setItem('lang', commonLang);
  mainTheme = getCurrentTheme()
  localStorage.setItem('theme', mainTheme)
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
  if(localStorage.getItem('lang') || (localStorage.getItem('theme')))  {
    const lang = localStorage.getItem('lang');
    translate(lang);
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      makeLightTheme()
    }    
  }
}
window.addEventListener('load', getLocalStorage)


// BEAUTIFULBUTTONS

var animateButton = function(e) {

  e.preventDefault;
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("portfolio-btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

console.log("Всего баллов: 85 из 75. \n\nСмена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5")

