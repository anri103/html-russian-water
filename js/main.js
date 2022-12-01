(function ($) {
    'use strict';

    // MENU

    $(function () {
        //caches a jQuery object containing the header element
        var header = $('#headerfixed');
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    });

    $(function () {
        var body = $('body');
        var mobheader = $('#mobilemenu');
        var mobbutton = $('.burger');
        var iconbutton = $('#mobileheader .burger');

        mobbutton.click(function () {
            mobheader.toggleClass('show');
            body.toggleClass('menu-change');
            iconbutton.toggleClass('c');
        });
    });

    $(function () {
        var searchOverlay = $('.search-overlay');
        var searchButton = $('.btn-modal-search');
        var searchForm = $('.modal-search-block');
        var searchClose = $('.search-close');

        searchButton.click(function () {
            searchForm.toggleClass('show');
            searchOverlay.toggleClass('show');
        });

        searchClose.click(function () {
            searchForm.removeClass('show');
            searchOverlay.removeClass('show');
        });

        searchOverlay.click(function () {
            searchForm.removeClass('show');
            searchOverlay.removeClass('show');
        });
    });

    // ScrollTop
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('#scrollToTop').addClass('visible animated rotateIn');
        } else {
            $('#scrollToTop').removeClass('visible animated rotateIn');
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Слайдер в блоке Интро на Главной
    $(function () {
        new Swiper('.section-front-hero__slider', {
            effect: 'slide',
            loop: true,
            navigation: {
                nextEl: '.hero-arrow-next',
                prevEl: '.hero-arrow-prev',
            },
        });
    });

})(jQuery);