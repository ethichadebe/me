// ******************************************* //
// ********** Farmie Template Js ************* //
// ******************************************* //

(function ($) {
  "use strict";

  var browserWindow = $(window);
  var welcomeSlide = $(".welcome-slides");

  // :: 1.0 Preloader Active Code
  browserWindow.on("load", function () {
    $(".preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // :: 2.0 Tooltip Active Code
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // :: 3.0 Nav Active Code
  if ($.fn.classyNav) {
    $("#famieNav").classyNav();
  }

  // :: 4.0 Sticky Active Code
  if ($.fn.sticky) {
    $(".famie-main-menu").sticky({
      topSpacing: 0,
    });
  }

  // :: 5.0 Sliders Active Code
  if ($.fn.owlCarousel) {
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
    });

    welcomeSlide.on("translate.owl.carousel", function () {
      var slideLayer = $("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .removeClass("animated " + anim_name)
          .css("opacity", "0");
      });
    });

    welcomeSlide.on("translated.owl.carousel", function () {
      var slideLayer = welcomeSlide
        .find(".owl-item.active")
        .find("[data-animation]");
      slideLayer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .addClass("animated " + anim_name)
          .css("opacity", "1");
      });
    });

    $("[data-delay]").each(function () {
      var anim_del = $(this).data("delay");
      $(this).css("animation-delay", anim_del);
    });

    $("[data-duration]").each(function () {
      var anim_dur = $(this).data("duration");
      $(this).css("animation-duration", anim_dur);
    });

    $(".testimonial-slides").owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });
  }

  // :: 6.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="arrow_up"></i>',
    });
  }

  // :: 7.0 Video Play Icons Active Code
  if ($.fn.magnificPopup) {
    $(".play-icon").magnificPopup({
      type: "iframe",
    });
  }

  // :: 8.0 Jarallax Active Code
  if ($.fn.jarallax) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }

  // :: 9.0 Prevent Default a Click
  $('a[href="#"]').on("click", function (e) {
    e.preventDefault();
  });

  // :: 10.0 Search Box Active Code
  $("#searchIcon").on("click", function () {
    $(".search-form").toggleClass("search-active");
  });
  $(".closeIcon").on("click", function () {
    $(".search-form").removeClass("search-active");
  });

  // :: 11.0 Wow Active Code
  if (browserWindow.width() > 767) {
    new WOW().init();
  }

  $(document).ready(function () {
    var itemsMainDiv = ".MultiCarousel";
    var itemsDiv = ".MultiCarousel-inner";
    var itemWidth = "";

    $(".leftLst, .rightLst").click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition) click(0, this);
      else click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function () {
      ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
      var incno = 0;
      var dataItems = "data-items";
      var itemClass = ".item";
      var id = 0;
      var btnParentSb = "";
      var itemsSplit = "";
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $("body").width();
      $(itemsDiv).each(function () {
        id = id + 1;
        var itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(",");
        $(this)
          .parent()
          .attr("id", "MultiCarousel" + id);

        if (bodyWidth >= 1200) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 992) {
          incno = itemsSplit[2];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 768) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        } else {
          incno = itemsSplit[0];
          itemWidth = sampwidth / incno;
        }
        $(this).css({
          transform: "translateX(0px)",
          width: itemWidth * itemNumbers,
        });
        $(this)
          .find(itemClass)
          .each(function () {
            $(this).outerWidth(itemWidth);
          });

        $(".leftLst").addClass("over");
        $(".rightLst").removeClass("over");
      });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
      var leftBtn = ".leftLst";
      var rightBtn = ".rightLst";
      var translateXval = "";
      var divStyle = $(el + " " + itemsDiv).css("transform");
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(el + " " + rightBtn).removeClass("over");

        if (translateXval <= itemWidth / 2) {
          translateXval = 0;
          $(el + " " + leftBtn).addClass("over");
        }
      } else if (e == 1) {
        var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        $(el + " " + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          $(el + " " + rightBtn).addClass("over");
        }
      }
      $(el + " " + itemsDiv).css(
        "transform",
        "translateX(" + -translateXval + "px)"
      );
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
    }
  });
})(jQuery);
