// https://github.com/thysultan/stylis.js#plugins
export const STYLIS_CONTEXTS = {
  POST_PROCESS: -2,
  PREPARATION: -1,
  NEWLINE: 0,
  PROPERTY: 1,
  SELECTOR_BLOCK: 2,
  AT_RULE: 3
}

function createExtraSpecifityPlugin(repeatTimes = 1) {
  function plugin(context, content, selectors) {
    if (context === 2) {
      for (let i = 0; i < selectors.length; i++) {
        const selector = selectors[i];
        if (/^\.[\w\d-_]+$/i.test(selector) && repeatTimes > 1) {
          selectors[i] = selector.repeat(repeatTimes);
        }
      }
    }
  }

  Object.defineProperty(plugin, 'name', { value: 'createExtraSpecifityPlugin' });

  return plugin;
}

export default createExtraSpecifityPlugin;