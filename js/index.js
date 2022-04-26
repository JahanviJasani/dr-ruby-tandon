
(function() {
  "use strict";

  /* Testimonials Slider */
  var options = {
    type: 'carousel',
    perView: 1.3,
    gap: 48,
    breakpoints: {
      1199: {
        perView: 1
      }
    }
  }
  
  var glide = new Glide('.testimonials__slider', options).mount()
  
})()