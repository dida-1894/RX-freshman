
$(document).ready(function () {
    "use strict";
    /*
    *  Simple image gallery. Uses default settings
    */

    $('.fancybox').fancybox();

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 150,

        closeEffect: 'elastic',
        closeSpeed: 150,

        closeClick: true,
        arrows: true,
        showArrows: true,
        helpers: {
            overlay: null
        }
    });
    $(window).load(function () {
        "use strict";
        $(".modal").delay(5000).fadeOut(1000);
        var moHeight = $(window).height();
        $(".the").css("height", moHeight);
    });
    $('.tablet-close').click(function (e) {
        $('.menu').toggleClass('no-collapse').toggleClass('collapse'); e.preventDefault();
    });
    window.onresize = function(){
      var moHeight = $(window).height();
      $(".the").css("height", moHeight);
    }
    $("#content_1").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            scrollInertia: 2000,
            theme: "dark"
        });
        $(".inner-noslit").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            scrollInertia: 2000,
            theme: "dark"
        });

        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'vertical',
          loop: true,
          autoHeight: true,
          hashNavigation: {
            watchState: true,
          }
        });
    var startScroll, touchStart, touchCurrent;
    mySwiper.slides.on('touchstart', function (e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
    }, true);
    mySwiper.slides.on('touchmove', function (e) {
        touchCurrent = e.targetTouches[0].pageY;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
                ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
                (
                    ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
                    ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
                    ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
                );
        if (onlyScrolling) {
            e.stopPropagation();
        }
    }, true);
});
