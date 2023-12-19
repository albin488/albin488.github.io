document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");
  const Herolis = document.querySelector(".hero");
  const topmen = document.querySelector(".top-menu");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("show");
    Herolis.classList.toggle("hide");
    topmen.classList.toggle("top-men");
  });
});
// JavaScript for infinite sliding the cards
const slider = document.getElementById("cardSlider");
let currentIndex = 0;

function showCard(index) {
  const cardWidth = document.querySelector(".card1").offsetWidth + 20; // Consider margin-right
  const newPosition = -index * cardWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

function cloneAndAppend() {
  const firstCard = document.querySelector(".card1");
  const clone = firstCard.cloneNode(true);
  document.querySelector(".slider-wrapper").appendChild(clone);
}

// Clone the first card and append it
cloneAndAppend();

// Example: Auto slide every 3 seconds
function autoSlide() {
  currentIndex++;
  const cardCount = document.querySelectorAll(".card1").length;
  if (currentIndex >= cardCount - 3) {
    currentIndex = 0;
    // Reset the position to the first card without animation
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
    setTimeout(() => {
      // Enable transition after resetting position
      slider.style.transition = "";
    }, 0);
  }
  showCard(currentIndex);
}
function nextSlide() {
  currentIndex++;
  const cardCount = document.querySelectorAll(".card1").length;
  if (currentIndex >= cardCount - 3) {
    currentIndex = 0;
  }
  showCard(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    const cardCount = document.querySelectorAll(".card1").length;
    currentIndex = cardCount - 4;
  }
  showCard(currentIndex);
}
function touchMoveHandler(event) {
  touchEndX = event.touches[0].clientX;
}

function touchEndHandler() {
  const touchDelta = touchEndX - touchStartX;
  if (Math.abs(touchDelta) > 50) {
    if (touchDelta > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
}
cardSlider.addEventListener("touchmove", function (event) {
  // Your code here
  const touchDelta = touchEndX - touchStartX;
  if (Math.abs(touchDelta) > 50) {
    if (touchDelta > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
});

setInterval(autoSlide, 3000);
