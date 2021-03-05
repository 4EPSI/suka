// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.header_menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.header_menu').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});

// Top slider
$('.home_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    mouseDrag: false,
    items: 1,
    // navText: [
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    // ]
});

// our_portfolio_slider
$('.our_portfolio_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    mouseDrag: false,
    items: 1,
});


// Video
$('body').on('click', '.play', function (){
    // $('.top_video')[0].paused ? $('.top_video')[0].play() : $('.top_video')[0].pause();

    if ($('.top_video')[0].paused) {
        $('.top_video')[0].play();
    } else {
        $('.top_video')[0].pause();
    }
});



// jQuery( document ).ready(function($) {
//     $('.myHTMLvideo').click(function() {
//         this.paused ? this.play() : this.pause();
//     });
// });


// $('video').trigger('play');
// $('video').trigger('pause');

// jQuery( document ).ready(function($) {
//     $('.myHTMLvideo').click(function() {
//         this.paused ? this.play() : this.pause();
//     });
// });

// $('.top_section').click(function(){
//     $('#movie1').play();
//         });

// Custom nav btns
// $('.customNextBtn').click(function() {
//     $(this).closest('.custom_slider').find('.owl-carousel').trigger('next.owl.carousel');
// });
// $('.customPrevBtn').click(function() {
//     $(this).closest('.custom_slider').find('.owl-carousel').trigger('prev.owl.carousel');
// });

// // Case slider
// $('.home_slider').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     dots: true,
//     mouseDrag: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     smartSpeed: 500,
//     items: 1
// });
// Scroll to section
// $('body').on('click', '.go_to', function () {
//     var scroll_el = $(this).attr('href');
//     $('html, body').animate({
//         scrollTop: $(scroll_el).offset().top - 80
//     }, 1000);
//     $('.burger').removeClass('active');
//     $('.header_menu').removeClass('active');
//     return false;
// });

// // Header
// var viewportheight = $( window ).height(),
//     currentTop = $(this).scrollTop(),
//     header = $('.header').outerHeight();

// // Header changing on Load
// if (currentTop >= header) {
//     $('.header').addClass('active');
// } else {
//     $('.header').removeClass('active');
// }
// // Header changing on Scroll
// $(document).scroll(function(){
//     viewportheight = $( window ).height();
//     currentTop = $(this).scrollTop();
//     if (currentTop >= header) {
//         $('.header').addClass('active');
//     } else {
//         $('.header').removeClass('active');
//     }
// });
