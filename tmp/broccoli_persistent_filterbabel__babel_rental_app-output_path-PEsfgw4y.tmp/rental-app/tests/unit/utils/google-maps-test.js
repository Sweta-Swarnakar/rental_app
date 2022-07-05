define('rental-app/tests/unit/utils/google-maps-test', ['rental-app/utils/google-maps', 'qunit'], function (_googleMaps, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | google-maps', function (hooks) {

    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _googleMaps.default)();
      assert.ok(result);
    });
  });
});