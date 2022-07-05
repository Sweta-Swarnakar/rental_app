define("ember-cli-mirage/serializers/active-model-serializer", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedActiveModelSerializer
   @hide
   */
  class DeprecatedActiveModelSerializer extends _miragejs.ActiveModelSerializer {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)("Importing 'ActiveModelSerializer' from 'ember-cli-mirage/serializers/active-model-serializer' is deprecated. " + "Add the `miragejs` package to devDependencies and use `import { ActiveModelSerializer } from 'miragejs';` instead.");
      super(...arguments);
    }

  }

  _exports.default = DeprecatedActiveModelSerializer;
});