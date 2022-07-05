define("ember-cli-mirage/orm/associations/has-many", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedHasMany
   @hide
   */
  class DeprecatedHasMany extends _miragejs._ormAssociationsHasMany {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'HasMany' from 'ember-cli-mirage/orm/associations/has-many' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _ormAssociationsHasMany } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedHasMany;
});