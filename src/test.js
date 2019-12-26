import stylisClassSpecificityPlugin, { STYLIS_CONTEXTS } from './index';

describe('stylisClassSpecificityPlugin', () => {
  it('transforms .my-class into .my-class.my-class', () => {
    const selectors = ['.my-class'];
    stylisClassSpecificityPlugin(
      STYLIS_CONTEXTS.SELECTOR_BLOCK,
      'display: block;',
      selectors
    );
    expect(selectors).toEqual(['.my-class.my-class']);
  });

  it('does not transform .my-class.no-spec', () => {
    const selectors = ['.my-class.no-spec'];
    stylisClassSpecificityPlugin(
      STYLIS_CONTEXTS.SELECTOR_BLOCK,
      'display: block;',
      selectors
    );
    expect(selectors).toEqual(['.my-class.no-spec']);
  });

  it('does not transform .my-class when context is STYLIS_CONTEXTS.NEWLINE', () => {
    const selectors = ['.my-class'];
    stylisClassSpecificityPlugin(
      STYLIS_CONTEXTS.NEWLINE,
      'display: block;',
      selectors
    );
    expect(selectors).toEqual(['.my-class']);
  });
});