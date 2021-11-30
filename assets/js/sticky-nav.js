  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });
    $(window).on('load', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });
  /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    $(window).on('load', function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    $('.navbar-toggler').on('click', function() {
      console.log($('.navbar-toggler').attr("aria-expanded"))
      if($('.navbar-toggler').attr("aria-expanded") === "false") {
        $('.fixed-top').addClass('bg-solid');
      } else if ($(window).scrollTop() <= 100){
        $('.fixed-top').removeClass('bg-solid');
      }
    })