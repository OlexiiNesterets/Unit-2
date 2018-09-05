'use script';

(function ($) {

    $(document).ready(function () {

        (function iconHoverInit() {
            $('.nav__item').hover(function () {
                $(this).find('.item__icon').css({ "background-position-y": "22px" });
                $(this).find('.item__name').css({ "color": "white" });
            }, function () {
                $(this).find('.item__icon').css({ "background-position-y": "" });
                $(this).find('.item__name').css({ "color": "" });
            });

            $('.social__item').hover(function () {
                $(this).find('svg path').css({ "fill": "#fd5c08" });
            }, function () {
                $(this).find('svg path').css({ "fill": "" });
            });
        })();



        $('.gallery').masonry({
            itemSelector: '.gallery__item',
            columnWidth: '.gallery-sizer',
            percentPosition: true,
            gutter: 0
        });

        $('.best-offers__slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 750,
            prevArrow: '.best-offers__arrow--left',
            nextArrow: '.best-offers__arrow--right',

        });

        $('.last-minute__slider').slick({
            infinite: true,
            speed: 750,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '.last-minute__arrow--left',
            nextArrow: '.last-minute__arrow--right',
        });
    })

    function maskHoverInit() {
        $('.gallery__item').on('mouseenter', function () {
            $(this).find('.mask').removeClass('hidden');
            $(this).find('.price').addClass('hidden');

        });
        $('.gallery__item').on('mouseleave', function () {
            $(this).find('.mask').addClass('hidden');
            $(this).find('.price').removeClass('hidden');
        });
    };

    maskHoverInit();

    (function scrollAnimationInit() {
        $('.nav__link').on('click', function (event) {
            event.preventDefault();
            var target = $(this.hash);
            $('html').animate({
                scrollTop: target.offset().top
            }, 600);
        });
    })();

    (function mapInit() {
        var map = $('.map')[0];

        var myMap = new google.maps.Map(map,
            {
                zoom: 6,
                center: { lat: 43.6109200, lng: 3.8772300 },
                disableDefaultUI: true,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]
            }

        );

        var placesToVisit = [
            { lat: 41.89474, lng: 12.4839 },
            { lat: 40.4165000, lng: -3.7025600 },
            { lat: 45.7484600, lng: 4.8467100 }
        ];

        var markers = [];

        placesToVisit.forEach(function (item) {
            markers.push(new google.maps.Marker({
                map: myMap,
                position: item,
                icon: "./img/mark.png",
            }));
        });
    })();

})(jQuery);