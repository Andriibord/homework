window.onload = function () {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "custom-bullet",
          clickable:true,
        },
      });
}