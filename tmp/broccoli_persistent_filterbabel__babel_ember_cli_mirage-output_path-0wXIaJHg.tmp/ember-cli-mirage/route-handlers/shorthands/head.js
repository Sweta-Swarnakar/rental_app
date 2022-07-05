define("ember-cli-mirage/route-handlers/shorthands/head", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedHeadShorthandRouteHandler
   @hide
   */
  class DeprecatedHeadShorthandRouteHandler extends _miragejs._routeHandlersShorthandsHead {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'HeadShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/head' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsHead } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedHeadShorthandRouteHandler;
});