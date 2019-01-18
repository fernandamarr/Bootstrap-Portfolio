$(document).ready(function () {

    // Smoothly scroll anchors over course of 1 second 
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });

    function triangleBgd() {
        $("#contact .contact-wrapper").css({
            "border-left": $("#contact").width() + "px solid #fff",
            "border-bottom": "300px solid transparent"
        })
    }
    triangleBgd();

    $(window).on('resize', triangle);





});