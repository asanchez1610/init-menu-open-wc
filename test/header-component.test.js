import { html, fixture, expect } from '@open-wc/testing';

import '../header-component.js';

describe('HeaderComponent', () => {
  it('has a default title "Hey there" and options = []', async () => {
    const el = await fixture(html`
      <header-component></header-component>
    `);

    expect(el.title).to.equal('Web App');
    expect(el.options).to.equal([]);
  });


  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <header-component title="attribute title"></header-component>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <header-component></header-component>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
