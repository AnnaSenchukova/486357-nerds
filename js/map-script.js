'use strict';

function initMap() {
  var coordinates = new google.maps.LatLng(59.939130, 30.321476);
  var myMap = {
    zoom: 17,
    center: coordinates
  };

  var map = new google.maps.Map(document.querySelector('.map__image'), myMap);

  var image = 'img/map_pointer.png';

  var marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(59.938723, 30.323785),
    icon: image,
    title: 'Большая Конюшенная, д.19/8'
  });
}
