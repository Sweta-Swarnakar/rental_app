define("ember-cli-mirage/get-rfc232-test-context", ["exports", "@embroider/macros/runtime"], function (_exports, _runtime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = getRfc232TestContext;

  /**
    Helper to get our rfc232/rfc268 test context object, or null if we're not in
    such a test.
  
    @hide
  */
  function getRfc232TestContext() {
    // Support older versions of `ember-qunit` that don't have
    // `@ember/test-helpers` (and therefore cannot possibly be running an
    // rfc232/rfc268 test).
    if (true && (0, _runtime.isTesting)()) {
      let {
        getContext
      } = require("@ember/test-helpers");

      return getContext();
    }
  }
});