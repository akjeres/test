$(document).ready(function(){
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
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
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
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
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
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
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
            iconImageHref: '/img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark2 = new ymaps.Placemark([54.927741, 37.442568] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: '/img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark3 = new ymaps.Placemark([54.918457, 37.437565] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: '/img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark4 = new ymaps.Placemark([54.907971, 37.413225] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: '/img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });
    var myPlacemark5 = new ymaps.Placemark([54.931889, 37.465362] , {},
        {   iconLayout: 'default#imageWithContent',
            iconImageHref: '/img/forest.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-20, -47] });

// Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
});
$('.map-nav-item').click(function () {
    var coordX = $(this).attr('data-coord-x');
    var coordY = $(this).attr('data-coord-y');
    myMap.setCenter([coordX, coordY], 16, {
        checkZoomRange: true
    });
});

function closeModal() {
    $(".modal-window-section").removeClass('active');
    $('html').removeClass('active');
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
    var recepient = $('.modal-window-image');
    openModal();
    recepient.attr('src', $selfSRC);
    console.log($selfSRC);

});



