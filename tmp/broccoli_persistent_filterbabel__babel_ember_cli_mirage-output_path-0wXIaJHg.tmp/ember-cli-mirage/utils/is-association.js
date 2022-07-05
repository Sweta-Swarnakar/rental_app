define("ember-cli-mirage/utils/is-association", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = isAssociation;

  /**
   @function isAssociation
   @hide
   */
  function isAssociation() {
    const message = `Importing 'isAssociation' from 'ember-cli-mirage/utils/is-association' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _utilsIsAssociation } from 'miragejs';\` instead.`;
    (0, _deprecateImports.deprecateNestedImport)(message);
    return (0, _miragejs._utilsIsAssociation)(...arguments);
  }
});