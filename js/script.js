// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 400,
  speedAsDuration: true,
  offset: 75,
});



// Mobile navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('menu-items')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

