$(document).ready(function () {

    // Scroll to top of page on window refresh
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }

    // Hide page titles
    // $(".title").hide();

    // Scroll anchors over course of 1 second 
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });

    // $('a[href^="#"]').on('click', function (event) {
    //     $(".title").show();
    //     var target = $(this.getAttribute('href'));
    //     if (target.length) {
    //         event.preventDefault();
    //         $(".title").animate({ fontSize: '4em' }, "slow");
    //     }
    // });

    // Animate code icon
    // $("#code-icon").hover(function() {
    //     $(this).addClass('beat');
    //     animateCode();
    // })

});