define("ember-cli-mirage/orm/associations/belongs-to", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedBelongsTo
   @hide
   */
  class DeprecatedBelongsTo extends _miragejs._ormAssociationsBelongsTo {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'BelongsTo' from 'ember-cli-mirage/orm/associations/belongs-to' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _ormAssociationsBelongsTo } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedBelongsTo;
});