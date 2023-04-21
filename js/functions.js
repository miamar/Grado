$.fn.cycle.log = $.noop

$(document).ready(function() {
    $('.scheda .share').click(function() {
        $(this).next('.share-btns').toggleClass('visible');
        return false;
    })
    
    
    $(document).ready(function() {
        console.log('ready');
        if (!$('body').hasClass('noposter')) {
            window.addEventListener('scroll', function(e){
                console.log('scroll');
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 60;
                if (distanceY > shrinkOn) {
                    $('header').addClass("white");
                } else {
                    if ($('header').hasClass("white")) {
                       $('header').removeClass("white");
                    }
                }
            });
        }
    });

    $(".home-video .mute").click(function(event) {
        $(this).toggleClass("active")
        $(".home-video video").prop('muted', !$(".home-video video").prop('muted'));
        event.preventDefault();
    });

    $(".home-video--modify .mute").click(function(event) {
        $(this).toggleClass("active")
        $(".home-video--modify video").prop('muted', !$(".home-video--modify video").prop('muted'));
        event.preventDefault();
    });
    
})

$(window).on('load', function() {
    console.log('scroll');
    if (!$('header').hasClass('white')) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 60;
        if (distanceY > shrinkOn) {
            $('header').addClass("white");
        } else {
            if ($('header').hasClass("white")) {
                $('header').removeClass("white");
            }
        }
    }
});

function processPoints(geometry, callback, thisArg) {
        if ( geometry instanceof google.maps.LatLng) {
            callback.call(thisArg, geometry);
        } else if ( geometry instanceof google.maps.Data.Point) {
            callback.call(thisArg, geometry.get());
        } else {
            geometry.getArray().forEach(function(g) {
                processPoints(g, callback, thisArg);
            });
        }
    }
