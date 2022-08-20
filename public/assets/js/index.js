AOS.init();

const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

//know more
const btn = document.querySelector(".knowmore-btn");
const km = document.querySelector(".cards_single");

function flipCard1() {
  km.classList.add("flip");
}

btn.addEventListener("click",flipCard1);


//slider
$(document).ready(function () {
        $(".slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        });
});

$(document).ready(function () {
  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});