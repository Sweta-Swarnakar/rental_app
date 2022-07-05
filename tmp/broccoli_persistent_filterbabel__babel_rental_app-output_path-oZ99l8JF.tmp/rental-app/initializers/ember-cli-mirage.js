define('rental-app/initializers/ember-cli-mirage', ['exports', 'rental-app/config/environment', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage', 'rental-app/mirage/config'], function (exports, _environment, _getRfc232TestContext, _startMirage, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;

  const { default: baseConfig, testConfig, makeServer } = _config;

  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (baseConfig) {
        application.register('mirage:base-config', baseConfig, {
          instantiate: false
        });
      }
      if (testConfig) {
        application.register('mirage:test-config', testConfig, {
          instantiate: false
        });
      }
      if (makeServer) {
        application.register('mirage:make-server', makeServer, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig, testConfig, makeServer });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});