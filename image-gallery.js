const gallery=document.querySelectorAll(".images-container img");
const all=document.querySelector('.all-btn');
const nature=document.querySelector('.nature-btn');
const animals=document.querySelector('.animals-btn');
const cities=document.querySelector('.cities-btn');
const cars=document.querySelector('.cars-btn');
const food=document.querySelector('.food-btn');
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
function filterGallery(category) {
  gallery.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });
}

all.addEventListener("click", () => filterGallery("all"));
nature.addEventListener("click", () => filterGallery("nature"));
animals.addEventListener("click", () => filterGallery("animal"));
cities.addEventListener("click", () => filterGallery("city"));
cars.addEventListener("click", () => filterGallery("car"));
food.addEventListener("click", () => filterGallery("food"));
alert("Welcome to the Image Gallery! Click on the buttons above to filter images by category.");


// Open lightbox when an image is clicked
gallery.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;   // show clicked image
    lightbox.classList.remove("hidden");
  });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Optional: close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
gallery.forEach(img => {
  img.addEventListener("click", () => {
    console.log("Clicked:", img.src); // Debug
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});
let currentIndex = 0;
const galleryArray = Array.from(gallery); // convert NodeList to array

// Open lightbox when an image is clicked
galleryArray.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

// Next button
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryArray.length;
  lightboxImg.src = galleryArray[currentIndex].src;
});

// Prev button
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryArray.length) % galleryArray.length;
  lightboxImg.src = galleryArray[currentIndex].src;
});

// Close button
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
