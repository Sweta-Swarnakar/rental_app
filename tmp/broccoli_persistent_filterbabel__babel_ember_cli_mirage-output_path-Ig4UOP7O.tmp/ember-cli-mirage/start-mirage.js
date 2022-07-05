define("ember-cli-mirage/start-mirage", ["exports", "ember-cli-mirage/utils/read-modules", "ember-cli-mirage/server", "ember-inflector"], function (_exports, _readModules, _server, _emberInflector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startMirage;

  /**
    Helper to start mirage. This should not be called directly. In rfc232/rfc268
    tests, use `setupMirage()` or the `autoboot` option in the addon config
    in the environment. In legacy tests that call `startMirage` directly, this
    should be called via the `startMirage` method exported from
    `<app>/initializers/ember-cli-mirage`.
  
    This is intended to be called with only the `owner` argument (which would be
    `this.owner` in an rfc232/rfc268 test, or the application instance if called
    from an instance initializer). However, to support the legacy initializer, it
    can instead accept a hash of the environment and config objects.
  
    @hide
  */
  function startMirage(owner) {
    let {
      env,
      baseConfig,
      testConfig,
      makeServer
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!env || !baseConfig) {
      if (!owner) {
        throw new Error('You must pass `owner` to startMirage()');
      }

      env = env || resolveRegistration(owner, 'config:environment'); // These are set from `<app>/initializers/ember-cli-mirage`

      baseConfig = baseConfig || resolveRegistration(owner, 'mirage:base-config');
      testConfig = testConfig || resolveRegistration(owner, 'mirage:test-config');
      makeServer = makeServer || resolveRegistration(owner, 'mirage:make-server');
    } // Deprecate exporting makeServer as NOT the default function


    (true && !(makeServer === undefined) && Ember.deprecate('Do not export the makeServer function. Please make the makeServer function the default exported function', makeServer === undefined, {
      id: 'ember-cli-mirage-config-makeserver-export',
      for: 'ember-cli-mirage',
      since: '2.3.0',
      until: '3.0.0',
      url: 'https://www.ember-cli-mirage.com/docs/advanced/server-configuration'
    }));
    let routes; // Are they using the routes as the default export

    if (baseConfig && baseConfig.length === 0) {
      routes = baseConfig;
      (true && !(false) && Ember.deprecate('The routes only function has been deprecated. Please use the make server version your default export in the config.', false, {
        id: 'ember-cli-mirage-config-routes-only-export',
        for: 'ember-cli-mirage',
        since: '2.4.0',
        until: '3.0.0',
        url: 'https://www.ember-cli-mirage.com/docs/advanced/server-configuration'
      }));
    } // Is the default exported function the makeServer function


    if (baseConfig && baseConfig.length > 0) {
      makeServer = baseConfig;
    }

    let environment = env.environment;
    let mirageEnvironment = env['ember-cli-mirage'] || {};
    let discoverEmberDataModels = mirageEnvironment.discoverEmberDataModels;
    (true && !(discoverEmberDataModels === undefined) && Ember.deprecate('The discoverEmberDataModels environment variable has been deprecated. See the server configuration section on how to discover models', discoverEmberDataModels === undefined, {
      id: 'ember-cli-mirage-config-discover-ember-data-models',
      for: 'ember-cli-mirage',
      since: '2.4.0',
      until: '3.0.0',
      url: 'https://www.ember-cli-mirage.com/docs/advanced/server-configuration'
    }));

    if (discoverEmberDataModels === undefined) {
      discoverEmberDataModels = true;
    }

    let modules = (0, _readModules.default)(env.modulePrefix);
    let options = Object.assign(modules, {
      environment,
      routes,
      testConfig,
      discoverEmberDataModels
    });
    options.trackRequests = mirageEnvironment.trackRequests;
    options.inflector = {
      singularize: _emberInflector.singularize,
      pluralize: _emberInflector.pluralize
    };
    let server;

    if (makeServer) {
      server = makeServer(options);

      if (typeof location !== 'undefined' && location.search.indexOf('mirageLogging') !== -1) {
        server.logging = true;
      }
    } else {
      server = new _server.default(options);
    }

    return server;
  } // Support Ember 1.13


  function resolveRegistration(owner) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (owner.resolveRegistration) {
      return owner.resolveRegistration(...args);
    } else if (owner.__container__) {
      return owner.__container__.lookupFactory(...args);
    } else {
      return owner.container.lookupFactory(...args);
    }
  }
});