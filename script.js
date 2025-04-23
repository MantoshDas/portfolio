// Lightbox functionality
const images = document.querySelectorAll('.popup-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Skills Carousel functionality with loop
const scrollContainer = document.getElementById("skillsTrack");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
  if (scrollContainer.scrollLeft === 0) {
    // Scroll to the last skill when reaching the left edge
    scrollContainer.scrollTo({
      left: scrollContainer.scrollWidth,
      behavior: 'smooth'
    });
  } else {
    scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
  }
});

scrollRightBtn.addEventListener("click", () => {
  if (scrollContainer.scrollLeft === scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    // Scroll to the first skill when reaching the right edge
    scrollContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
  }
});
