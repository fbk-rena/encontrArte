function cargarPagina() {
    $('.button-collapse').sideNav();
    obtenerUbicacion();
    $("#map").click();
    
}

var obtenerUbicacion = function (e) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    } else {
        alert("Actualice su navegador");
    }
};

var mostrarPosicion = function (posicion) {
    var coordenadas = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
    mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
    var map = new google.maps.Map($('#map')[0], {
        zoom: 17,
        center: coordenadas
    });
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
}
var eventosCercanos = function () {
    var iconBase = 'http:// labs.google.com/ridefinder/images/';
    var icons = {
        expo: {
            icon: iconBase + 'mm_20_orange.png'
        },
        concierto: {
            icon: iconBase + 'mm_20_purple.png'
        },
        pelicula: {
            icon: iconBase + 'mm_20_blue.png'
        }
    };

    function addMarker(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    }

    var features = [
        {
            position: new google.maps.LatLng(19.4200504, -99.15428700000001),
            type: 'expo'
          }/*,{
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'concierto'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'pelicula'
          }*/
    ];

    for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
    }
}

$(document).ready(cargarPagina);
