var config = {
    apiKey: "AIzaSyDAl-sAyQGr3tRpK5TwfPz5lVbfyvdD5TM",
    authDomain: "onurfirebase-8f143.firebaseapp.com",
    databaseURL: "https://onurfirebase-8f143.firebaseio.com",
    projectId: "onurfirebase-8f143",
    storageBucket: "onurfirebase-8f143.appspot.com",
    messagingSenderId: "611179792299",
    appId: "1:611179792299:web:dba6f8ab2cc03713c334ee"
};

firebase.initializeApp(config);
var database = firebase.database();
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
    var test = snapshot.val()
    var keys = Object.keys(test);
    test = (JSON.stringify(test))
    test = (JSON.parse(test))

    var products = document.getElementById("products")
    for(var i=0;i<keys.length;i++){
        for(var k=0;k<test[keys[i]].length;k++){
            products.innerHTML += '<div class="col-xs-12 col-sm-6"><div class="single-menu"><div class="media"> <div class="media-left">'+
            ' <div class="menu-img" style="background-image: url(&apos;'+test[keys[i]][k].image+'&apos;)"><img src="images/menu/ovr.png" alt="">'+
            '</div></div><div class="media-right"> <table class="table"><tr><td><a href="#"><h3 class="menu-title">'+test[keys[i]][k].name+'</h3>'+
            ' </a></td><td><div class="menu-rate">'+test[keys[i]][k].price+' TL </div></td></tr></table><p>'+test[keys[i]][k].details+'</p>'+
            '</div></div></div><div class="space-30"></div></div>'
            
        }
        
    }

}, function (error) {
    console.log("Error: " + error.code);
});



(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #mainmenu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: true,
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    $(".home-slide").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 1000, // Integer: Speed of the transition, in milliseconds
        timeout: 10000, // Integer: Time between slide transitions, in milliseconds
        pager: true, // Boolean: Show pager, true or false
        nav: false,
    });
    /* Special Slider Active
    =============================*/
    $('.special-list').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* Plans Slider Active
    =============================*/
    $('.plans').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        items: 1,
    });
    /* Blogs Slider Active
    =============================*/
    $('.blogs').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    magnifPopup();
    $('#book-time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });
    $('#book-date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    $('.tlt').textillate({
        loop: true,
    });
    var basicExampleEl = document.getElementById('booktable');
    var datepair = new Datepair(basicExampleEl);





    // Revolution slider
    var revapi;
    revapi = jQuery('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        fullWidth: "on",
        forceFullWidth: "on"
    });



})(jQuery);