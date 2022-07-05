define('rental-app/components/location-map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    maps: Ember.inject.service(),

    didInsertElement() {
      this._super(...arguments);
      let mapElement = this.maps.getMapElement(this.location);
      let mapContainerElement = this.element.querySelector('.map-container');
      mapContainerElement.appendChild(mapElement);
    }
  });
});