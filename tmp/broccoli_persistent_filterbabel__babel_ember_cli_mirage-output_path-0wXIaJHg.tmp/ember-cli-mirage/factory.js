define("ember-cli-mirage/factory", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedFactory
   @hide
   */
  class DeprecatedFactory extends _miragejs.Factory {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Factory' from 'ember-cli-mirage/factory' is deprecated. ` + `Install the \`miragejs\` package and use \`import { Factory } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedFactory;
});