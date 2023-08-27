let names = document.querySelector(".name");
let family = document.querySelector(".family");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let btn = document.querySelector(".btn");
let paraname = document.querySelector(".para-name");
let paraFamily = document.querySelector(".para-family");
let form = document.querySelector(".form");
let paraemail = document.querySelector(".para-email");
let paraPassword = document.querySelector(".para-password");

form.addEventListener("submit", (e) => {
  if (names.value === "") {
    paraname.classList.remove("hidden");
    e.preventDefault();
    console.log(names.textContent);
  }
  if (family.value === "") {
    paraFamily.classList.remove("hidden");
  }
  if (!email.value.includes("@")) {
    paraemail.classList.remove("hidden");
  }
  if (password.value.length < 6) {
    paraPassword.classList.remove("hidden");
  }
});
