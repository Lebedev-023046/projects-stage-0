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


console.log('Всего баллов: 75 из 75.\nВёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22')