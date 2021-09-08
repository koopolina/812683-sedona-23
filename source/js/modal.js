const feedbackForm = document.querySelector(".feedback__form");
const failurePopup = document.querySelector(".modal-failure");
const successPopup = document.querySelector(".modal-success");
const failureClose = document.querySelector(".modal-failure__button");
const feedbackName = document.querySelector(".personality-info__input--name");
const feedbackSurname = document.querySelector(".personality-info__input--surname");
const feedbackContacts = document.querySelector(".contacts-info__input");

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackSurname.value || !feedbackContacts.value) {
    evt.preventDefault();
    failurePopup.classList.add("modal-failure--show");
  } else {
    successPopup.classList.add("modal-success--show")
  }
});

failureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove("modal-failure--show");
  successPopup.classList.remove("modal-success--show");
});
