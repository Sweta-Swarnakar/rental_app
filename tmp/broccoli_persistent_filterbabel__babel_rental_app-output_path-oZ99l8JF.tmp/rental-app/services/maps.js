define('rental-app/services/maps', ['exports', 'rental-app/utils/google-maps'], function (exports, _googleMaps) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    init() {
      this._super(...arguments);
      if (!this.cachedMaps) {
        this.set('cachedMaps', Ember.Object.create());
      }
      if (!this.mapUtil) {
        this.set('mapUtil', _googleMaps.default.create());
      }
    },

    getMapElement(location) {
      let camelizedLocation = Ember.String.camelize(location);
      let element = this.get(`cachedMaps.${camelizedLocation}`);
      if (!element) {
        element = this.createMapElement();
        this.mapUtil.createMap(element, location);
        this.set(`cachedMaps.${camelizedLocation}`, element);
      }
      return element;
    },

    createMapElement() {
      let element = document.createElement('div');
      element.className = 'map';
      return element;
    }

  });
});