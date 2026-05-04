$(document).ready(function() {
    /*========== Toggle ==========*/

    $(document).on("click", ".toggle", function() {
        $(".toggle").toggleClass("active");
        $("body").toggleClass("flow");
        $("[nav]").toggleClass("active");
        $(".upperlay").toggleClass("active");
        // $("nav > ul > li > .sub").slideUp();
    });
    w = $(window).width();
    if (w <= 991) {
        $(document).on("click", "nav ul > .fav > a", function(e) {
            $(".toggle").removeClass("active");
            $("body").removeClass("flow");
            $("[nav]").removeClass("active");
            $(".upperlay").removeClass("active");
        });
    }

    // scrolling
    $(document).on("click", "nav ul > .fav > a", function(e) {
        e.preventDefault();
        $span = $(this);
        $(".toggle").removeClass("active");
        $("nav").removeClass("active");
        let hash = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(hash).offset().top - 10,
            },
            100
        );
    });
    $(".banner-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        // navText: [ 'prev', 'next' ],
        dots: true,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
            },
            991: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    // =================owl===========

    $(document).ready(function() {
        $('.testi-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) { return; }
            var carousel = e.relatedTarget;
            $('.owl-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            loop: true,
            center: true,
            smartSpeed: 1000,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            margin: 20,
            items: 1,
            responsive: {
                0: {
                    nav: false
                },
                767: {
                    // nav: true
                }
            }
        });
    });
});