define("ember-cli-mirage/serializer", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedSerializer
   @hide
   */
  class DeprecatedSerializer extends _miragejs.Serializer {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Serializer' from 'ember-cli-mirage/serializer' is deprecated. ` + `Install the \`miragejs\` package and use \`import { Serializer } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedSerializer;
});