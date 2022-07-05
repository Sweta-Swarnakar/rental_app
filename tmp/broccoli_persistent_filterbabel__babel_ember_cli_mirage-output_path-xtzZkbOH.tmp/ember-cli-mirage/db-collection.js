define("ember-cli-mirage/db-collection", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedDbCollection
   @hide
   */
  class DeprecatedDbCollection extends _miragejs._DbCollection {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'DbCollection' from 'ember-cli-mirage/db-collection' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _DbCollection } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedDbCollection;
});