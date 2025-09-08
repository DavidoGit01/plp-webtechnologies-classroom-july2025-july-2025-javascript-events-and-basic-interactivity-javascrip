// -------------------
// Part 1: Event Handling
// -------------------

// Get button and message paragraph
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

// When button is clicked, show a message
messageBtn.addEventListener("click", function() {
  message.textContent = "You clicked the button! 🎉";
});

// -------------------
// Part 2: Interactive Elements
// -------------------

// Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
const body = document.body;

toggleMode.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterValue = document.getElementById("counterValue");

increaseBtn.addEventListener("click", function() {
  counter++;
  counterValue.textContent = counter;
});

decreaseBtn.addEventListener("click", function() {
  counter--;
  counterValue.textContent = counter;
});
// -------------------
// Part 3: Form Validation
// -------------------
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Validate form on submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop the form from refreshing the page

  let valid = true;

    // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email (example@domain.com)";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid, show success
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
  } else {
    formSuccess.textContent = "";
  }
});
