define("ember-cli-mirage/serializers/rest-serializer", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedRestSerializer
   @hide
   */
  class DeprecatedRestSerializer extends _miragejs.RestSerializer {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)("Importing 'RestSerializer' from 'ember-cli-mirage/serializers/rest-serializer' is deprecated. " + "Add the `miragejs` package to devDependencies and use `import { RestSerializer } from 'miragejs';` instead.");
      super(...arguments);
    }

  }

  _exports.default = DeprecatedRestSerializer;
});