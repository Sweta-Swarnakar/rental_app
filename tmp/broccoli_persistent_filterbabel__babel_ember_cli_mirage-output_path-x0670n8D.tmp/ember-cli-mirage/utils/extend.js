define("ember-cli-mirage/utils/extend", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = extend;

  /**
   @function extend
   @hide
   */
  function extend() {
    const message = `Importing 'extend' from 'ember-cli-mirage/utils/extend' is deprecated. ` + `This wasn't intended to be a public API and you should use Factory.extend, Model.extend, ` + `etc. APIs described in https://miragejs.com/. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _utilsExtend } from 'miragejs';\` instead.`;
    (0, _deprecateImports.deprecateNestedImport)(message);
    return (0, _miragejs._utilsExtend)(...arguments);
  }
});