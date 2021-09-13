$(document).ready(function () {
    var $bg = $('.bg')
    var $korzina = $('.korzina')
    var $like = $('.like')
    var $form = $('.form')
    // // // Navbar
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    // // // icons toggle
    $(".icons .i1").click(function () {
        $like.slideToggle(300)
        $bg.slideToggle(300)
    })
    $(".icons .i2").click(function () {
        $korzina.slideToggle(300)
        $bg.slideToggle(300)
    })
    $(".icons .i3").click(function () {
        $form.animate({
            top: '20%'
        }, 400)
        $bg.slideToggle(300)
    })
    $(".togllers .e").click(function () {
        $like.css('display', 'none')
        $bg.css('display', 'none')
    })
    $(".togllers .e").click(function () {
        $korzina.css('display', 'none')
        $bg.css('display', 'none')
    })
    // // // form
    $('.form .btn').click(function () {
        $form.animate({
            top: '-1500px'
        })
        $bg.css('display', 'none')
    })
    // // // scroll
    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 68) {
            $('header .header-2').addClass('header-active');
        } else {
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });
    // // // header section
    $('.home-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true
    });
    // // // smart watch
    $('.small-image img').click(function () {

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });

    $('.gallery .btn').click(function () {

        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.gallery .box').show(400);
        } else {
            $('.gallery .box').not('.' + filter).hide(200);
            $('.gallery .box').filter('.' + filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });
});