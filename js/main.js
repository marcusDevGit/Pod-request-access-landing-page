const form = document.forms.registration;
const submit = document.getElementById("submit");
const error = document.getElementsByClassName("error")[0];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  const { email } = form;
  const emailValue = email.value.trim();

  if (emailValue.length === 0) {
    error.innerHTML = "<p>Oops! Please add your email</p>";
  } else if (!isValidEmail(emailValue)) {
    error.innerHTML = "<p>Oops! Please check your email</p>";
  } else {
    error.style.display = "none";
  }
});

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}