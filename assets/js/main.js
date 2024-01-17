'use strict';

jQuery(document).ready(function () {
  /*
   *    Navbar toggle for mobile
   */
  jQuery('[data-nav-toggler]').click(function () {
    jQuery('[data-navbar]').toggleClass('active');
    jQuery('[data-overlay]').toggleClass('active');
    jQuery('body').toggleClass('nav-active');
  });

  /*
   *    HEADER
   *    Active Header when scroll down 100px
   */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('[data-header]').addClass('active');
    } else {
      $('[data-header]').removeClass('active');
    }
  });

  /*
   *    SLIDER
   *
   */
  var slideCount = $('.slider-item').length;
  // console.log(slideCount);
  var slideWidth = $('.slider-item').outerWidth();
  var gapValue = parseInt($('[data-slider-container]').css('gap'));
  var currentSlide = 1;

  jQuery('[data-slider-next]').click(function () {
    if (currentSlide < slideCount) {
      currentSlide++;
    } else {
      currentSlide = 1;
    }
    var slidePosition = -((currentSlide - 1) * (slideWidth + gapValue));
    $('[data-slider-container]').css(
      'transform',
      'translateX(' + slidePosition + 'px)'
    );
  });

  $('[data-slider-prev]').click(function () {
    if (currentSlide > 1) {
      currentSlide--;
    } else {
      currentSlide = slideCount;
    }
    var slidePosition = -((currentSlide - 1) * (slideWidth + gapValue));
    $('[data-slider-container]').css(
      'transform',
      'translateX(' + slidePosition + 'px)'
    );
  });

  /*
   *    ARCODION
   *
   */
  $('[data-accordion-btn]').click(function () {
    // $(this).parent().next('.accordion-content').slideToggle();
    $(this).parents('[data-accordion]').toggleClass('expanded'); // Optional for visual indication
  });
});
