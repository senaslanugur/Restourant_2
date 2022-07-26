(function ($) {
    "use strict";
    try {
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading-1',
            loadingInner: '<div class="cp-spinner cp-meter"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'html',
            transition: function (url) {
                window.location.href = url;
            }
        });
    } catch (er) {
        console.log(er);
    }
    try {
        var windowH = $(window).height() / 2;
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").css('display', 'flex');
            } else {
                $("#myBtn").css('display', 'none');
            }
        });
        $('#myBtn').on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });
    } catch (er) {
        console.log(er);
    }
    try {
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');
        if ($('.top-bar').length > 0) {
            var posWrapHeader = $('.top-bar').height();
        } else {
            var posWrapHeader = 0;
        }
        if ($(window).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top', 0);
        } else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > posWrapHeader) {
                $(headerDesktop).addClass('fix-menu-desktop');
                $(wrapMenu).css('top', 0);
            } else {
                $(headerDesktop).removeClass('fix-menu-desktop');
                $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
            }
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.btn-show-menu-mobile').on('click', function () {
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });
        var arrowMainMenu = $('.arrow-main-menu-m');
        for (var i = 0; i < arrowMainMenu.length; i++) {
            $(arrowMainMenu[i]).on('click', function () {
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }
        $(window).on('resize', function () {
            if ($(window).width() >= 992) {
                if ($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display', 'none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }
                $('.sub-menu-m').each(function () {
                    if ($(this).css('display') === 'block') {
                        console.log('hello');
                        $(this).css('display', 'none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
            }
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.js-show-modal-search').on('click', function () {
            $('.modal-search-header').addClass('show-modal-search');
            $(this).css('opacity', '0');
        });
        $('.js-hide-modal-search').on('click', function () {
            $('.modal-search-header').removeClass('show-modal-search');
            $('.js-show-modal-search').css('opacity', '1');
        });
        $('.container-search-header').on('click', function (e) {
            e.stopPropagation();
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.scroll-slider1').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.my-calendar').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
        var myCalendar = $('.my-calendar');
        var isClick = 0;
        $(window).on('click', function () {
            isClick = 0;
        });
        $(myCalendar).on('apply.daterangepicker', function () {
            isClick = 0;
        });
        $('.btn-calendar').on('click', function (e) {
            e.stopPropagation();
            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
        $(myCalendar).on('click', function (e) {
            e.stopPropagation();
            isClick = 1;
        });
        $('.daterangepicker').on('click', function (e) {
            e.stopPropagation();
        });
    } catch (er) {
        console.log(er);
    }
    try {
        var srcOld = $('.video-mo-01').children('iframe').attr('src');
        $('[data-target="#modal-video-01"]').on('click', function () {
            $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";
            setTimeout(function () {
                $('.video-mo-01').css('opacity', '1');
            }, 300);
        });
        $('[data-dismiss="modal"]').on('click', function () {
            $('.video-mo-01').children('iframe')[0].src = srcOld;
            $('.video-mo-01').css('opacity', '0');
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.js-show-more-menu').on('click', function () {
            $('.js-more-menu').slideDown();
            $(this).hide();
            $('.js-show-less-menu').show();
        });
        $('.js-show-less-menu').on('click', function () {
            $('.js-more-menu').slideUp();
            $(this).hide();
            $('.js-show-more-menu').show();
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.js-show-more-gallery').on('click', function () {
            $('.js-more-gallery').slideDown();
            $(this).hide();
            $('.js-show-less-gallery').show();
        });
        $('.js-show-less-gallery').on('click', function () {
            $('.js-more-gallery').slideUp();
            $(this).hide();
            $('.js-show-more-gallery').show();
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.block3-child1-name').on('mouseover', function () {
            $(this).parent().addClass('hov-block3');
        });
        $('.block3-child1-name').on('mouseout', function () {
            $(this).parent().removeClass('hov-block3');
        });
        $('.block4-txt-name').on('mouseover', function () {
            $(this).parent().parent().parent().addClass('hov-block4');
        });
        $('.block4-txt-name').on('mouseout', function () {
            $(this).parent().parent().parent().removeClass('hov-block4');
        });
        $('.block4-pic').on('mouseover', function () {
            $(this).parent().addClass('hov-block4');
        });
        $('.block4-pic').on('mouseout', function () {
            $(this).parent().removeClass('hov-block4');
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.hov2, .hov3').on('mouseenter', function () {
            var obj = $(this);
            if (!$(obj).hasClass('hover')) {
                $(obj).addClass('hover');
                setTimeout(function () {
                    $(obj).removeClass('hover');
                }, 1100);
            }
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $('.hov6').on('mouseenter', function () {
            $(this).find('.hov6-child').slideDown(400);
        });
        $('.hov6').on('mouseleave', function () {
            $(this).find('.hov6-child').slideUp(300);
        });
    } catch (er) {
        console.log(er);
    }
    try {
        $(".js-select2").each(function () {
            $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
            });
        })
    } catch (er) {
        console.log(er);
    }
    try {
        $('.parallax100').parallax100();
    } catch (er) {
        console.log(er);
    }
})(jQuery);