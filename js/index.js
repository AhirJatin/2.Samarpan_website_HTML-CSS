$(document).ready(function () {
  // for medical specialities
  $(".slider-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-content",
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 792,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  });

  // for feedback slider
  $(".feedback-slider").slick({
    arrows: true,
    autoplay: false,
  });
});

// for mobile curtain menu
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
