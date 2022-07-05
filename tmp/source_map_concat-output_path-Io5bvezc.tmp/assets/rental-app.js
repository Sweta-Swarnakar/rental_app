'use strict';



;define('rental-app/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
;define('rental-app/app', ['exports', 'rental-app/resolver', 'ember-load-initializers', 'rental-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('rental-app/components/rental-listing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('rental-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('rental-app/helpers/app-version', ['exports', 'rental-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('rental-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('rental-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('rental-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'rental-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('rental-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('rental-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('rental-app/initializers/export-application-global', ['exports', 'rental-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('rental-app/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('rental-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('rental-app/router', ['exports', 'rental-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('rentals');
  });

  exports.default = Router;
});
;define('rental-app/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('rental-app/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('rental-app/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('rentals');
    }
  });
});
;define('rental-app/routes/rentals', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
      }, {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike TV',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
      }, {
        id: 'downtown-charm',
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
      }];
    }
  });
});
;define('rental-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("rental-app/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UmA46rIE", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"jumbo\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right tomster\"],[9],[10],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"About Super Rentals\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n  \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    Contact Us\\n\"]],\"parameters\":[]},null],[10]],\"hasEval\":false}", "meta": { "moduleName": "rental-app/templates/about.hbs" } });
});
;define("rental-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6M4ZLnRP", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"menu\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"SuperRentals\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"links\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"menu-about\"]],{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"menu-contact\"]],{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"body\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "rental-app/templates/application.hbs" } });
});
;define("rental-app/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kdYnqS43", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"jumbo\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right tomster\"],[9],[10],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Contact Us\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    Super Rentals Representatives would love to help you\"],[7,\"br\"],[9],[10],[0,\"\\n    choose a destination or answer any questions you may have.\\n  \"],[10],[0,\"\\n  \"],[7,\"address\"],[9],[0,\"\\n    Super Rentals HQ\\n    \"],[7,\"p\"],[9],[0,\"\\n      1212 Test Address Avenue\"],[7,\"br\"],[9],[10],[0,\"\\n      Testington, OR 97233\\n    \"],[10],[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"tel:503.555.1212\"],[9],[0,\"+1 (503) 555-1212\"],[10],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"mailto:superrentalsrep@emberjs.com\"],[9],[0,\"superrentalsrep@emberjs.com\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[10]],\"hasEval\":false}", "meta": { "moduleName": "rental-app/templates/contact.hbs" } });
});
;define("rental-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a08t8xfx", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "rental-app/templates/index.hbs" } });
});
;define("rental-app/templates/rentals", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hbWf7Eqy", "block": "{\"symbols\":[\"rental\"],\"statements\":[[7,\"div\"],[11,\"class\",\"jumbo\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right tomster\"],[9],[10],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Welcome!\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    We hope you find exactly what you're looking for in a place to stay.\\n  \"],[10],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[7,\"article\"],[11,\"class\",\"listing\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"detail owner\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Owner:\"],[10],[0,\" \"],[1,[22,1,[\"owner\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"detail type\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Type:\"],[10],[0,\" \"],[1,[22,1,[\"category\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"detail location\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Location:\"],[10],[0,\" \"],[1,[22,1,[\"city\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"detail bedrooms\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Number of bedrooms:\"],[10],[0,\" \"],[1,[22,1,[\"bedrooms\"]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "rental-app/templates/rentals.hbs" } });
});
;

;define('rental-app/config/environment', [], function() {
  var prefix = 'rental-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("rental-app/app")["default"].create({"name":"rental-app","version":"0.0.0+7534bbc0"});
          }
        
//# sourceMappingURL=rental-app.map
