$(function () {
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1)
        $('.main_visual .slide_num strong').text(s.slideCont)

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on')
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct < 1000) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });



    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        $('.main_slide').slick('slickGoTo', idx, false);
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

})