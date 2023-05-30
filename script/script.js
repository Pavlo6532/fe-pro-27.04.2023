const images = ["flowers.jpg", "nature.jpg", "nature2.jpg"];
let currentImageIndex = 0;

const sliderContainer = document.querySelector(".slider-container");
const sliderImages = document.querySelectorAll(".slider-image");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

function updateSlider() {
  sliderImages.forEach((image) => {
    image.style.display = "none";
  });

  sliderImages[currentImageIndex].style.display = "block";

  if (currentImageIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (currentImageIndex === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

prevButton.addEventListener("click", () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateSlider();
  }
});

updateSlider();
