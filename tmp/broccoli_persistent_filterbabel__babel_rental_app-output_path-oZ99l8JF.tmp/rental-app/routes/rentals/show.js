define('rental-app/routes/rentals/show', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model(params) {
            return this.store.findRecord('rental', params.rental_id);
        }
    });
});