// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    dots:false,
    thumbs:false,
    nav:true,
    navText : ["<span class='left_ctrl'></span>","<span class='right_ctrl'></span>"], 
    loop:true,
    smartSpeed:2000,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass:true, 
    responsive: {
        300: {
            nav:false,
        },
        700: {
            nav:true,
        }
    }
});
// Read more product details
$("#cs_rdmre").click(function(){
    $(".tab-content").toggleClass("over_hid");
});

// Clock Countdown
$(function() {
    var currentDate = new Date(),
      finished = false,
      availiableExamples = {
        //set15daysFromNow: 15 * 24 * 60 * 60 * 1000,
        set5minFromNow: 5 * 60 * 1000,
        set3minFromNow: 3 * 60 * 1000,
        set1minFromNow: 1 * 60 * 1000
      };
  
    function callback(event) {
      $this = $(this);
      switch (event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "weeks":
        case "daysLeft":
          $this.find('span#' + event.type).html(event.value);
          if (finished) {
            $this.fadeTo(0, 1);
            finished = false;
          }
          break;
        case "finished":
          $this.fadeTo('slow', .5);
          finished = true;
          break;
      }
    }
    $('div#clock').countdown(availiableExamples.set3minFromNow + currentDate.valueOf(), callback);
    $('select#exampleDate').change(function() {
      try {
        var $this = $(this),
          value;
        currentDate = new Date();
        switch ($this.attr('value')) {
          case "other":
            value = prompt('Set the date to countdown:\nThe hh:mm:ss parameters are opitionals', 'YYYY/MM/DD hh:mm:ss');
            break;
          case "daysFromNow":
            value = prompt('How many days from now?', '');
            value = new Number(value) * 24 * 60 * 60 * 1000 + currentDate.valueOf();
            break;
          case "minutesFromNow":
            value = prompt('How many minutes from now?', '');
            value = new Number(value) * 60 * 1000 + currentDate.valueOf();
            break;
          default:
            value = availiableExamples[$this.attr('value')] + currentDate.valueOf();
        }
        $('div#clock').countdown(value, callback);
        $this.find('option:first').attr('selected', true);
      } catch (e) {
        alert(e);
      }
    });
});
// Product Details Light Box
/*if (window.matchMedia('(min-width: 992px)').matches) {
    jQuery("#zoom_image").elevateZoom({
      cursor: 'crosshair',
      borderColour: "#e4dddd",
      zoomType: "window",
      lensShape: "round",
      lensSize: 200,
      lensOpacity: 0,
      gallery: 'more',
      galleryActiveClass: 'active',
      imageCrossfade: true,
      easing: false,
    });
}; */
// Product Details More Images
/*$('#more').owlCarousel({
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    margin: 10,
    items: 4,
    responsiveClass: true,
    thumbs:false,
    responsive: {
      200: {
        items:2,
      },
      400: {
        items:3,
      },
      501: {
        items:4,
      },
    }
});*/
$('#more-views').owlCarousel({
    loop: true,
    items: 1,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
// Popup
$('#pop_up').owlCarousel({
    loop: true,
    items: 1,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
// Login
function initInputBlur() {
  $('.cs_inpt').on('blur', function(event) {
    var inputValue = this.value;
    if (inputValue) {
      this.classList.add('has_value');
    } else {
      this.classList.remove('has_value');
    }
  });
};
// Filter Section Fixed
$(window).scroll(function(){
  if ($(this).scrollTop() > 1000) {
     $('#cs_filter').addClass('fixed_f');
  } else {
     $('#cs_filter').removeClass('fixed_f');
  }
});