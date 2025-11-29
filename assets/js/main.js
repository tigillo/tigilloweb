(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();  
  
  /* 
   Screens Crouserl
   ========================================================================== */
    $('#carousel-screen').carousel({
      num: 5,
      maxWidth: 450,
      maxHeight: 300,
      distance: 50,
      scale: 0.6,
      animationTime: 1000,
      showTime: 4000
    });   

  /* 
   Clients Sponsor 
   ========================================================================== */
    var owl = $("#clients-scroller");
    owl.owlCarousel({
      items:5,
      itemsTablet:3,
      margin:90,
      stagePadding:90,
      smartSpeed:450,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsTablet: [767,2],
      itemsTabletSmall: [480,2],
      itemsMobile : [479,1],
    });

  /* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 4,
      itemsDesktopSmall: [1024, 4],
      itemsTablet: [600, 2],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="lni-arrow-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="lni-arrow-right"></i>');

    /* Screens Shot Slider
    =============================*/
     var owl = $(".screens-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        addClassActive: true,
        items: 3,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });


  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));

/* attach a submit handler to the form */
$("#subscribe-news").submit(function(event) {
  $('#subscribe-result').text('Thank you for subscribing!');
});


$("#contactForm").submit(function(event) {
    // 1. Stop the browser from redirecting to Formspree
    event.preventDefault();

    var honeypot = $(this).find('input[name="_gotcha"]').val();
    
    if (honeypot && honeypot.length > 0) {
        console.log("Bot detected. Request blocked locally.");
        // Pretend it worked so the bot goes away
        $('#contact-result').text('Thank you!').css('color', 'green');
        return; // STOP. Do not call Formspree.
    }

    var $form = $(this);
    var $result = $('#contact-result');
    var $submitButton = $form.find('button[type="submit"]');

    $submitButton.prop('disabled', true).text('Sending...');

    $.ajax({
        url: $form.attr('action'),
        method: 'POST',
        data: $form.serialize(),
        dataType: 'json',
        headers: {
            'Accept': 'application/json'
        },
        success: function(response) {
            $result.text('Thank you for submitting your response!');
            $result.css('color', 'green');
            $form[0].reset();
            $submitButton.text('Sent');
        },
        error: function(err) {
            $result.text('Oops! There was a problem sending your form. Please check your entries and try again.');
            $result.css('color', 'red');
            $submitButton.prop('disabled', false).text('Send Message');
        }
    });
});


$(".dropdown").hover(function(event) {
      $(".service-menu").css("display", "block");
    });
$(".nav-link").hover(function(event) {
      $(".service-menu").css("display", "none");
    });


$( document ).ready(function() {
  if(window.location.search.toString().indexOf("linkedin.com") != -1 ) {
    Calendly.initPopupWidget({url: 'https://calendly.com/tigillo/free-discovery'});return false;
  }
});