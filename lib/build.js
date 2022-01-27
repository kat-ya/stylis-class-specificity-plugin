"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.STYLIS_CONTEXTS = void 0;
// https://github.com/thysultan/stylis.js#plugins
var STYLIS_CONTEXTS = {
  POST_PROCESS: -2,
  PREPARATION: -1,
  NEWLINE: 0,
  PROPERTY: 1,
  SELECTOR_BLOCK: 2,
  AT_RULE: 3
};
exports.STYLIS_CONTEXTS = STYLIS_CONTEXTS;

function createExtraSpecifityPlugin() {
  var repeatTimes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  function plugin(context, content, selectors) {
    if (context === 2) {
      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];

        if (/^\.[\w\d-_]+$/i.test(selector) && repeatTimes > 1) {
          selectors[i] = selector.repeat(repeatTimes);
        }
      }
    }
  }

  Object.defineProperty(plugin, 'name', {
    value: 'createExtraSpecifityPlugin'
  });
  return plugin;
}

var _default = createExtraSpecifityPlugin;
exports["default"] = _default;
