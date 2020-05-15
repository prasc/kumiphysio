//---------------------------------------- Image change

const picPaths  = [
    "assets/background-images/1.jpg",
    "assets/background-images/2.jpg",
    "assets/background-images/3.jpg",
]


// An index to track the contender image 
var imageIndex = 0;
const imageContainer = document.getElementById('header-image');


// An event callback for starting the interval
function startInterval() {
 setInterval(displayNextImage, 5000);
}

function displayNextImage() {
    imageContainer.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    imageIndex = imageIndex + 1; // It can be replaced with imageIndex ++  
  }
}

window.onload=function() {
    startInterval();
}


//---------------------------------------- Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 0;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
