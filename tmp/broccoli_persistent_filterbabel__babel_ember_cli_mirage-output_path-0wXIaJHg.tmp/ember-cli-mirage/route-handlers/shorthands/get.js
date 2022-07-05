define("ember-cli-mirage/route-handlers/shorthands/get", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedGetShorthandRouteHandler
   @hide
   */
  class DeprecatedGetShorthandRouteHandler extends _miragejs._routeHandlersShorthandsGet {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'GetShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/get' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsGet } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedGetShorthandRouteHandler;
});