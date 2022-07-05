define("ember-cli-mirage/utils/reference-sort", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = referenceSort;

  /**
   @function referenceSort
   @hide
   */
  function referenceSort() {
    const message = `Importing 'referenceSort' from 'ember-cli-mirage/utils/reference-sort' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _utilsReferenceSort } from 'miragejs';\` instead.`;
    (0, _deprecateImports.deprecateNestedImport)(message);
    return (0, _miragejs._utilsReferenceSort)(...arguments);
  }
});