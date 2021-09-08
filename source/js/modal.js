const feedbackForm = document.querySelector(".feedback__form");
const feedbackPopup = document.querySelector(".modal");

feedbackForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal--show");
});

// feedbackButton.addEventListener("click", function (evt) {
//   feedbackPopup.classList.add("modal-show");
// });
