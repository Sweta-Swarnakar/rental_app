define('rental-app/utils/google-maps', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const google = window.google;

  exports.default = Ember.Object.extend({

    init() {
      this.set('geocoder', new google.maps.Geocoder());
    },

    createMap(element, location) {
      let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
      this.pinLocation(location, map);
      return map;
    },

    pinLocation(location, map) {
      this.geocoder.geocode({ address: location }, (result, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          let geometry = result[0].geometry.location;
          let position = { lat: geometry.lat(), lng: geometry.lng() };
          map.setCenter(position);
          new google.maps.Marker({ position, map, title: location });
        }
      });
    }

  });
});