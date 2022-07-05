define("ember-cli-mirage/route-handlers/shorthands/put", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedPutShorthandRouteHandler
   @hide
   */
  class DeprecatedPutShorthandRouteHandler extends _miragejs._routeHandlersShorthandsPut {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'PutShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/put' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsPut } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedPutShorthandRouteHandler;
});