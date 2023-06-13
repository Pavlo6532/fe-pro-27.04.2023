"use strict";

function redirectToProfile() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  if (!email || !phone || !name || !password) {
    alert("Please enter all fields.");
    return;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const phoneRegex = /^[+\d()-]{10,13}$/;
  const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number format.");
    return;
  }

  if (!nameRegex.test(name)) {
    alert(
      "Invalid name format. Enter three words with the first letter capitalized."
    );
    return;
  }

  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Name:", name);
  console.log("Password:", password);

  const loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(function () {
    loader.style.display = "none";
    window.location.href = "profile.html";
  }, 2000);
}

function goBack() {
  window.location.href = "login.html";
}

function getScreenSize() {
  const screenSize = {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
  console.log("Screen Size:", screenSize);
}
