const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg"];
let currentIndex = 0;

const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function showImage(index) {
  imageElement.src = images[index];

  if (index === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (index === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
});

showImage(currentIndex);