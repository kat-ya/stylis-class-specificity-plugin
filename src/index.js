// https://github.com/thysultan/stylis.js#plugins
export const STYLIS_CONTEXTS = {
  POST_PROCESS: -2,
  PREPARATION: -1,
  NEWLINE: 0,
  PROPERTY: 1,
  SELECTOR_BLOCK: 2,
  AT_RULE: 3
}

const plugin = (repeatTimes = 1) => (context, content, selectors) => {
  if (context === STYLIS_CONTEXTS.SELECTOR_BLOCK) {
    for (let i = 0; i < selectors.length; i++) {
      const selector = selectors[i];
      if (/^\.[\w\d-_]+$/i.test(selector) && repeatTimes > 1) {
        selectors[i] = selector.repeat(repeatTimes);
      }
    }
  }
};

export default plugin;