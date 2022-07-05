define("ember-cli-mirage/orm/collection", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedCollection
   @hide
   */
  class DeprecatedCollection extends _miragejs.Collection {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Collection' from 'ember-cli-mirage/orm/collection' is deprecated. ` + `Install the \`miragejs\` package and use \`import { Collection } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedCollection;
});