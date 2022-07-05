define("ember-cli-mirage/index", ["exports", "ember-cli-mirage/ember-data", "ember-cli-mirage/serializers/ember-data-serializer", "ember-cli-mirage/deprecate-imports", "ember-cli-mirage/deprecate-reexports", "miragejs"], function (_exports, _emberData, _emberDataSerializer, _deprecateImports, _deprecateReexports, _miragejs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "EmberDataSerializer", {
    enumerable: true,
    get: function () {
      return _emberDataSerializer.default;
    }
  });
  Object.defineProperty(_exports, "applyEmberDataSerializers", {
    enumerable: true,
    get: function () {
      return _emberData.applyEmberDataSerializers;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "discoverEmberDataModels", {
    enumerable: true,
    get: function () {
      return _emberData.discoverEmberDataModels;
    }
  });
  (0, _deprecateReexports.initDeprecatedReExports)();

  const DeprecatedFactory = function () {
    (0, _deprecateImports.deprecateImport)('Factory');

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _miragejs.Factory.call(this, ...args);
  }; // Copy extend


  DeprecatedFactory.extend = _miragejs.Factory.extend;
  DeprecatedFactory.extractAfterCreateCallbacks = _miragejs.Factory.extractAfterCreateCallbacks;
  DeprecatedFactory.isTrait = _miragejs.Factory.isTrait; // // Store a reference on the class for future subclasses
  // DeprecatedFactory.attrs = newAttrs;

  class DeprecatedResponse extends _miragejs.Response {
    constructor() {
      (0, _deprecateImports.deprecateImport)('Response');
      super(...arguments);
    }

  }

  function hasMany() {
    (0, _deprecateImports.deprecateImport)('hasMany');

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new _miragejs._ormAssociationsHasMany(...args);
  }

  function belongsTo() {
    (0, _deprecateImports.deprecateImport)('belongsTo');

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return new _miragejs._ormAssociationsBelongsTo(...args);
  }

  var _default = {
    Factory: DeprecatedFactory,
    Response: DeprecatedResponse,
    hasMany,
    belongsTo
  };
  _exports.default = _default;
});