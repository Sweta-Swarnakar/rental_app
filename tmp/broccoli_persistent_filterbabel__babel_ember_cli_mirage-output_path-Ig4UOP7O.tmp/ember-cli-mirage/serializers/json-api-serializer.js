define("ember-cli-mirage/serializers/json-api-serializer", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedJSONAPISerializer
   @hide
   */
  class DeprecatedJSONAPISerializer extends _miragejs.JSONAPISerializer {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)("Importing 'JSONAPISerializer' from 'ember-cli-mirage/serializers/json-api-serializer' is deprecated. " + "Add the `miragejs` package to devDependencies and use `import { JSONAPISerializer } from 'miragejs';` instead.");
      super(...arguments);
    }

  }

  _exports.default = DeprecatedJSONAPISerializer;
});