define("ember-cli-mirage/orm/associations/association", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedAssociation
   @hide
   */
  class DeprecatedAssociation extends _miragejs._ormAssociationsAssociation {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Association' from 'ember-cli-mirage/orm/associations/association' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _ormAssociationsAssociation } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedAssociation;
});