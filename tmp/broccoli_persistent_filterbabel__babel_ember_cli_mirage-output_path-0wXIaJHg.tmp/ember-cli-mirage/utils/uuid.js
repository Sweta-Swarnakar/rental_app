define("ember-cli-mirage/utils/uuid", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = uuid;

  /**
   @function uuid
   @hide
   */
  function uuid() {
    const message = `Importing 'uuid' from 'ember-cli-mirage/utils/uuid' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _utilsUuid } from 'miragejs';\` instead.`;
    (0, _deprecateImports.deprecateNestedImport)(message);
    return (0, _miragejs._utilsUuid)(...arguments);
  }
});