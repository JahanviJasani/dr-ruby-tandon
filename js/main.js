(function() {
  "use strict";

  $(window).on("load",function(){
    $(".loading").fadeOut("slow");
  });
    
  var shrinkHeader = 50;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
        $('.header').addClass('scrolled');
    }
    else {
      $('.header').removeClass('scrolled');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset;
  }

  var x = 0;
  $('.toggle__menu').on('click', function(e) {
    if(x==0) {
      $('.navbar').addClass('navbar__mobile');
      x=1;
    }
    else {
      $('.navbar').removeClass('navbar__mobile');
      x=0
    }
  });

    $('a[href*="#"]').not('[href="#"]').click(function(event) {
      if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top-30
          }, 800);
        }
      }
    });
  
    $('.accordion__question').on('click', function () {
      var isActive = $(this).hasClass("open");
      $('.accordion__question').removeClass('open');
      if (!isActive) {
        $(this).toggleClass('open', 300);
      }
      $(this).next().slideToggle(300);
      $(".accordion__answer").not($(this).next()).slideUp(300);
    });
  
    $('.close').click(function() {
      $('.alert').slideUp(500);
    });
  
  })()