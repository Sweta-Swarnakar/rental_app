define("ember-cli-mirage/utils/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hasEmberData = void 0;
  _exports.isDsModel = isDsModel;

  /**
    @hide
  */
  const hasEmberData = true;
  /**
    @hide
  */

  _exports.hasEmberData = hasEmberData;

  function isDsModel(m) {
    return m && typeof m.eachRelationship === 'function';
  }
});