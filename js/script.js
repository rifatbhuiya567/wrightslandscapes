(function () {
  const btt = document.querySelector(".btt i");

  window.onload = () => {
    btt.style.display = "none";
  };

  window.onscroll = () => {
    const sections = document.querySelectorAll(".webpage-section");
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (
        sections.hasOwnProperty(s) &&
        sections[s].offsetTop - 96 <= scrollPos
      ) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }

    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btt.style.display = "block";
    } else {
      btt.style.display = "none";
    }
  };

  const navLinks = document.querySelectorAll(".nav-link");

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }

  function mainSlider() {
    const myBannerSlider = $(".banner-slide");
    myBannerSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".banner-content:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });

    myBannerSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.banner-content[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );

    myBannerSlider.slick({
      autoplay: true,
      autoplaySpeed: 9000,
      speed: 500,
      dots: true,
      fade: true,
      arrows: false,
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  btt.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const galleryTop = $(".gallery-top");

  galleryTop.slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const galleryBottom = $(".gallery-bottom");

  galleryBottom.slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".next_b",
    prevArrow: ".prev_b",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})();
