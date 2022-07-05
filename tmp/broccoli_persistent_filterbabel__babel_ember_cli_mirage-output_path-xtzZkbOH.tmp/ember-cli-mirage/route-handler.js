define("ember-cli-mirage/route-handler", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedRouteHandler
   @hide
   */
  class DeprecatedRouteHandler extends _miragejs._RouteHandler {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'RouteHandler' from 'ember-cli-mirage/route-handler' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _RouteHandler } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedRouteHandler;
});