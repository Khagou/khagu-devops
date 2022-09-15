const contactForm = document.querySelector(".form-contact");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit clicked");
});
