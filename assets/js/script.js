// ===============================
// Slideshow
// ===============================
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove active from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }

  // Change every 4 seconds
  setTimeout(showSlides, 4000);
}

// ===============================
// FAQ Toggle
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");

      // Toggle answer visibility
      let answer = faq.querySelector(".faq-answer");
      if (faq.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
// Toggle service details
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetDetails = document.getElementById(targetId);

    // Close all others
    document.querySelectorAll('.service-details').forEach(detail => {
      if (detail !== targetDetails) {
        detail.classList.remove('active');
      }
    });

    // Toggle selected
    targetDetails.classList.toggle('active');
  });
});

// Close buttons
document.querySelectorAll('.close-details').forEach(closeBtn => {
  closeBtn.addEventListener('click', (e) => {
    e.target.closest('.service-details').classList.remove('active');
  });
});

