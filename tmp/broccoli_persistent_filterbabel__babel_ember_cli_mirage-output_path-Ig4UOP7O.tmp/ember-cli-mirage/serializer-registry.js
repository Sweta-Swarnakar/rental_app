define("ember-cli-mirage/serializer-registry", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedSerializerRegistry
   @hide
   */
  class DeprecatedSerializerRegistry extends _miragejs._SerializerRegistry {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'SerializerRegistry' from 'ember-cli-mirage/serializer-registry' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _SerializerRegistry } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedSerializerRegistry;
});