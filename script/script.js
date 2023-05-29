window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("myInput");
  const floatingDiv = document.getElementById("floatingDiv");

  floatingDiv.style.visibility = "hidden";

  input.addEventListener("mouseover", function () {
    floatingDiv.style.visibility = "visible";
  });

  input.addEventListener("mouseout", function () {
    floatingDiv.style.visibility = "hidden";
  });
});
