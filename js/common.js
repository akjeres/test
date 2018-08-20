$(document).ready(function(){
    if ($('section').hasClass('counters')) {
        var show = true;
        var countbox = "#counters";
        $(window).on("scroll load resize", function(){
            if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height();        // Высота окна браузера
            var d_height = $(document).height();      // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".spincrement").spincrement({
                    from: 0,
                    thousandSeparator: "",
                    duration: 3000
                });
                show = false;
            }
        });
    }
});

$('.news-slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});
$('.news-slider-sub').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.events-slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.gallery-slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.single-park-slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
});

if ($('section').hasClass('helpful-links')) {
    $('.to-top').css({
        left: ($('.helpful-links_column').eq(2).offset().left + $('.helpful-links_column').eq(2).innerWidth() - 44) + 'px'
    });
} else {
    $('.to-top').css({
        left: ($('footer .medium-flex-container').offset().left + $('footer .medium-flex-container').innerWidth() - 44) + 'px'
    });
}

$('.map-nav-item').click(function () {
    var coordX = $(this).attr('data-coord-x');
    var coordY = $(this).attr('data-coord-y');
    myMap.setCenter([coordX, coordY], 16, {
        checkZoomRange: true
    });
});

//Modal windows events
function closeModal() {
    $(".modal-window-section").removeClass('active');
    $('html').removeClass('active');
    $('.modal-window-image').attr('src', '');
};
function openModal() {
    $(".modal-window-section").addClass('active');
    $('html').addClass('active');
}
$(document).on('mouseup', function(e) {
    var container = $(".modal-window-section");
    if (container.has(e.target).length === 0){
       closeModal();
    }
});
$('.modal-window-close').on('click', function() {
    closeModal();
});
$('.gallery .gallery-slider-slide img, .events .events-slider-item img').on('click', function() {
    var $self = $(this);
    var $selfSRC = $self.prop('src');
    var lastDot = $selfSRC.lastIndexOf('.');
    var $fullSRC = $selfSRC.substring(0, lastDot) + '-full' + $selfSRC.substring(lastDot);
    var recepient = $('.modal-window-image');
    recepient.attr('src', $fullSRC);
    openModal();

});

//Burger events

var mobileActive = false;
$('.mobile-burger').on('click', function() {
    $(this).toggleClass('active');
    mobileActive = $(this).hasClass('active');
    if (mobileActive) {
        $('.nav-list').addClass('active');
    } else {
        $('.nav-list').removeClass('active');
    }
});
$('.nav-list').on('click', function() {
    mobileActive = false;
    $('.mobile-burger').removeClass('active');
    $(this).removeClass('active');
});

$('.to-top').click(function(e) {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});

var w = $(window).width();
$(window).resize(function(){
    var new_w=$(window).width();
    if(new_w!=w) {
        if (new_w > 1200) {
            mobileActive = false;
            $('.mobile-burger').removeClass('active');
            $('.nav-list').removeClass('active');
        }
        w=new_w;
    }
    if ($('section').hasClass('helpful-links')) {
        $('.to-top').css({
            left: ($('.helpful-links_column').eq(2).offset().left + $('.helpful-links_column').eq(2).innerWidth() - 44) + 'px'
        });
    } else {
        $('.to-top').css({
            left: ($('footer .medium-flex-container').offset().left + $('footer .medium-flex-container').innerWidth() - 44) + 'px'
        });
    }
});



var myMap;
var myGeoObject;
ymaps.ready(function(){
    // Указывается идентификатор HTML-элемента.
    myMap = new ymaps.Map("map", {
        center: [54.923536, 37.436763],
        zoom: 13
    });
    myMap.behaviors.disable('scrollZoom');
    // Создание геообъекта с типом точка (метка).
    var myPlacemark = new ymaps.Placemark([54.910918, 37.424391] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark2 = new ymaps.Placemark([54.927741, 37.442568] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark3 = new ymaps.Placemark([54.918457, 37.437565] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark4 = new ymaps.Placemark([54.907971, 37.413225] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark5 = new ymaps.Placemark([54.931889, 37.465362] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });

// Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
});
