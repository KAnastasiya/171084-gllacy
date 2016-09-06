import './gmap3.min';

$('.google-map').gmap3({
  map: {
    options: {
      center: [59.9394949, 30.3283302],
      zoom: 16,
      backgroundColor: '#f5f5f5',
      scrollwheel: false,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    }
  },
  marker: {
    latLng: [59.9387942, 30.3230833],
    options: {
      icon: new window.google.maps.MarkerImage('img/map/img/marker.png')
    }
  }
});
