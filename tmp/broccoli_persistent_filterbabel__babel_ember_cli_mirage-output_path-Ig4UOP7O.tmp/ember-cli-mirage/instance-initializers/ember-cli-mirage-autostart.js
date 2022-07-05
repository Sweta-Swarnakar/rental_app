define("ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  /**
    If we are running an rfc232/rfc268 test then we want to support the
    `autostart` configuration option, which auto-starts mirage before the test
    runs and shuts it down afterwards, and also sets `this.server` on the test
    context so the tests don't need to use the global `server`. We do this in an
    instance initializer because initializers only run once per test run, not
    before and after each test.
  
    @hide
  */
  function initialize(appInstance) {
    let testContext = (0, _getRfc232TestContext.default)();

    if (testContext) {
      let {
        'ember-cli-mirage': {
          autostart
        } = {}
      } = appInstance.resolveRegistration('config:environment');

      if (autostart) {
        testContext.server = (0, _startMirage.default)(appInstance); // Ensure that the server is shut down when the application is destroyed.

        Ember._registerDestructor(appInstance, () => {
          testContext.server.shutdown();
          delete testContext.server;
        });
      }
    }
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});