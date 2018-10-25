$(document).ready(function() {
    //$('#fullpage').fullpage({
    //    //options here
    //    autoScrolling:true,
    //    scrollHorizontally: true
    //});

    //methods
    //$.fn.fullpage.setAllowScrolling(false);


    $('#offer-1').click(function() {
        $('#descr-1').slideToggle();
        $(this).toggleClass("active");
        $('#offer-2').removeClass("active");
        $('#offer-3').removeClass("active");

        $('#descr-2').slideUp();
        $('#descr-3').slideUp();

        $('#screen_1').delay(400).fadeIn();
        $('#screen_2').fadeOut();
        $('#screen_3').fadeOut();
    });

    $('#offer-2').click(function() {
        $('#descr-2').slideToggle();
        $(this).toggleClass("active");
        $('#offer-1').removeClass("active");
        $('#offer-3').removeClass("active");

        $('#descr-1').slideUp();
        $('#descr-3').slideUp();

        $('#screen_2').delay(400).fadeIn();
        $('#screen_1').fadeOut();
        $('#screen_3').fadeOut();
    });

    $('#offer-3').click(function() {
        $('#descr-3').slideToggle();
        $(this).toggleClass("active");
        $('#offer-2').removeClass("active");
        $('#offer-1').removeClass("active");

        $('#descr-2').slideUp();
        $('#descr-1').slideUp();

        $('#screen_3').delay(400).fadeIn();
        $('#screen_2').fadeOut();
        $('#screen_1').fadeOut();
    });


    $('#mob-offer-1').click(function() {
        $('#mob-descr-1').slideToggle();
        $(this).toggleClass("active");
        $('#mob-offer-2').removeClass("active");
        $('#mob-offer-3').removeClass("active");

        $('#mob-descr-2').slideUp();
        $('#mob-descr-3').slideUp();
    });

    $('#mob-offer-2').click(function() {
        $('#mob-descr-2').slideToggle();
        $(this).toggleClass("active");
        $('#mob-offer-1').removeClass("active");
        $('#mob-offer-3').removeClass("active");

        $('#mob-descr-1').slideUp();
        $('#mob-descr-3').slideUp();
    });

    $('#mob-offer-3').click(function() {
        $('#mob-descr-3').slideToggle();
        $(this).toggleClass("active");
        $('#mob-offer-2').removeClass("active");
        $('#mob-offer-1').removeClass("active");

        $('#mob-descr-2').slideUp();
        $('#mob-descr-1').slideUp();
    });

});