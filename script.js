const submit = document.getElementById("submit");
const ownerInfo = document.getElementById("owner-form");
const petInfo = document.getElementById("pet-form");
const passwordInfo = document.getElementById("password-form");

submit.addEventListener("click", function () {
  if (!ownerInfo.classList.contains("invisible")) {
    ownerInfo.classList.add("invisible");
    petInfo.classList.remove("invisible");
  } else if (!petInfo.classList.contains("invisible")) {
    petInfo.classList.add("invisible");
    passwordInfo.classList.remove("invisible");
  }

  if (!passwordInfo.classList.contains("invisible")) {
    submit.textContent = "Submit";
  } else {
    submit.textContent = "Next";
  }
});

const seePassword = document.querySelectorAll(".see-password");
const passwordInput = document.querySelectorAll(".input-btn input");
var show = false;

for (let i = 0; i < seePassword.length; i++) {
  seePassword[i].addEventListener("click", function () {
    const hideIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 576 512"> <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>';
    const showIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>';
    show = !show;
    passwordInput[i].type = show ? "text" : "password";
    seePassword[i].innerHTML = show ? showIcon : hideIcon;
  });
}

const passwordRequirements = document.getElementById("password-requirements");

const input = document.getElementById("password");

input.addEventListener("click", function () {
  passwordRequirements.classList.remove("invisible");
  passwordRequirements.classList.add("slide-down");
});

input.addEventListener("blur", function () {
  passwordRequirements.classList.remove("slide-down");
  passwordRequirements.classList.add('slide-up');
  passwordRequirements.classList.add("invisible");
});

const requirementMet =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>';
