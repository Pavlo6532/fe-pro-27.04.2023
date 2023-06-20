"use strict";

$(document).ready(function () {
  $(".modal").click(function () {
    $("body").addClass("modal-open");
    $(".modal-wrapper").addClass("active").animate({ left: "0" }, 500);
  });

  $(".modal-window .close, .modal-wrapper").click(function (event) {
    if (this === event.target) {
      $("body").removeClass("modal-open");
      $(".modal-wrapper").animate({ left: "-100%" }, 500, function () {
        $(this).removeClass("active");
      });
    }
  });

  function disableScroll() {
    $("body").css("overflow", "hidden");
  }

  function enableScroll() {
    $("body").css("overflow", "auto");
  }
});
