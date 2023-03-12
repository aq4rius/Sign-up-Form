const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const feedback = document.querySelector("#passwordValidate-feedback");
let ifPasswordMatch = true;

confirmPassword.addEventListener("input", () => {
  if (password.value != confirmPassword.value) {
    feedback.innerHTML = "Passwords do not match.";
    password.classList.add("error");
    confirmPassword.classList.add("error");
    ifPasswordMatch = false;
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    feedback.innerHTML = "";
    ifPasswordMatch = true;
  }
});

form.onsubmit = function () {
  if (ifPasswordMatch) {
    alert("Account created!");

    return true;
  }
  alert("Passwords do not match!");
  return false;
};
