/*-----------------------------------------------------------------------------------
    Template Name: Qutter - Barber & Hair Salon HTML Template
    Template URI: https://webtend.net/demo/html/qutter/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header Style
    02. Dropdown menu
    03. Submenu Dropdown
    04. Gallery Popup
    05. Product Preview
    06. Video Popup
    07. Testimonial Slider
    08. Testimonial Two
    09. Testimonial Three
    10. News Slider
    11. Client Logo
    12. Price Range Fliter
    13. Success Counter
    14. Scroll to Top
    15. Nice Select
    16. WOW Animation
    17. Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // 04. Gallery Popup
        $('.style-two .gallery-content .icon').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
           
        
        // 05. Product Preview Popup
        $('.preview-item a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
           
        
        // 06. Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        } 

        
        // 07. Testimonial Slider
        if ($('.testimonial-wrap').length) {
            $('.testimonial-wrap').slick({
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: false,
                centerMode: false,
                variableWidth: false,
                slidesToShow: 2,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            variableWidth: false,
                        }
                    }
                ]
            });
        } 
        
        
        // 08. Testimonial Two Slider
        if ($('.testimonial-two-active').length) {
            $('.testimonial-two-active').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        } 
        
        
        // 09. Testimonial Three Slider
        if ($('.testimonial-three-active').length) {
            $('.testimonial-three-active').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                fade: true,
                focusOnSelect: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        } 
         
        
        
        // 10. News Slider
        if ($('.news-slider-wrap').length) {
            $('.news-slider-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: true,
                speed: 1000,
                prevArrow: $('.news-prev'),
                nextArrow: $('.news-next'),
                focusOnSelect: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        } 
        
        
        /* 11. Client Logo Slider */
        if ($('.client-logo-active').length) {
            $('.client-logo-active').slick({
                infinite: true,
                arrows: false,
                dots: false,
                fade: false,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 6,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        }
        
        
        // 12. Price Range Fliter jQuery UI
        if ($('.price-slider-range').length) {
            $(".price-slider-range").slider({
                range: true,
                min: 5,
                max: 350,
                values: [10, 250],
                slide: function (event, ui) {
                    $("#price").val("$ " + ui.values[0] + " - $ " + ui.values[1]);
                }
            });
            $("#price").val("$ " + $(".price-slider-range").slider("values", 0) +
                " - $ " + $(".price-slider-range").slider("values", 1));
        }

        
         /* 13. Success Counter */
        if ($('.counter-item').length) {
            $('.counter-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        // 14. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        // 15. Nice Select
        $('select').niceSelect();
        
        
        // 16. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
        
    });
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 17. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });

})(window.jQuery);
