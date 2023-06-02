function redirectToProfile() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email.length === 0 || password.length === 0) {
    alert("Enter required fields: Email and Password.");
    return;
  }

  console.log("Email:", email);
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
