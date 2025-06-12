// Simple carousel slider (testimonials and vehicles)
document.addEventListener("DOMContentLoaded", () => {
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const testimonialBtn = document.getElementById("prevTestimonial");

  let testimonialIndex = 0;

  testimonialBtn.addEventListener("click", () => {
    testimonialSlides[testimonialIndex].classList.remove("active");
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    testimonialSlides[testimonialIndex].classList.add("active");
  });

  const vehicleSlides = document.querySelectorAll(".booking .slide");
  let vehicleIndex = 0;

  setInterval(() => {
    vehicleSlides[vehicleIndex].classList.remove("active");
    vehicleIndex = (vehicleIndex + 1) % vehicleSlides.length;
    vehicleSlides[vehicleIndex].classList.add("active");
  }, 3000);
});
