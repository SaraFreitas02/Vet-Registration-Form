let isVisible = false;
const content = document.getElementById("dropdown-content");

document.getElementById("dropdown-btn").addEventListener("click", function () {
  isVisible = !isVisible;

  if (isVisible) {
    // Make content visible before starting the animation
    content.classList.remove("invisible");
    content.classList.remove("slide-up");
    content.classList.add("slide-down");
  } else {
    // Trigger slide-up animation first, then hide content
    content.classList.remove("slide-down");
    content.classList.add("slide-up");

    // Wait for the animation to end before hiding the content
    content.addEventListener('animationend', function handleAnimationEnd() {
      if (!isVisible) {
        content.classList.add("invisible"); // Only hide content after animation completes
      }
      // Clean up the event listener
      content.removeEventListener('animationend', handleAnimationEnd);
    }, { once: true });
  }
});

const submit = document.getElementById('submit');
const ownerInfo = document.getElementById('owner-form');
const petInfo = document.getElementById('pet-form');
const passwordInfo = document.getElementById('password-form');

submit.addEventListener("click", function () {
  if (!ownerInfo.classList.contains('invisible')) {
    ownerInfo.classList.add('invisible');
    petInfo.classList.remove('invisible');
  } else if (!petInfo.classList.contains('invisible')) {
    petInfo.classList.add('invisible');
    passwordInfo.classList.remove('invisible');
  }

  if (!passwordInfo.classList.contains('invisible')) {
    submit.textContent = "Submit";
  } else {
    submit.textContent = "Next";
  }
});
