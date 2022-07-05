
if (typeof document !== 'undefined') {
  __webpack_public_path__ = (function(){
    var scripts = document.querySelectorAll('script');
    return scripts[scripts.length - 1].src.replace(/\/[^/]*$/, '/');
  })();
}

module.exports = (function(){
  var d = _eai_d;
  var r = _eai_r;
  window.emberAutoImportDynamic = function(specifier) {
    if (arguments.length === 1) {
      return r('_eai_dyn_' + specifier);
    } else {
      return r('_eai_dynt_' + specifier)(Array.prototype.slice.call(arguments, 1))
    }
  };
    d('lodash-es', [], function() { return require('/Users/sswarnakar/Desktop/ember/rental-app/node_modules/lodash-es/lodash.js'); });
    d('miragejs', [], function() { return require('/Users/sswarnakar/Desktop/ember/rental-app/node_modules/miragejs/dist/mirage-esm.js'); });
})();
