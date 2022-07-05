define('rental-app/controllers/rentals', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      filterByCity(param) {
        if (param !== '') {

          return this.store.query('rental', { city: param }).then(results => {
            return { query: param, results: results };
          });
        } else {

          return this.store.findAll('rental').then(results => {
            return { query: param, results: results };
          });
        }
      }
    }
  });
});