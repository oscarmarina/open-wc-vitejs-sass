import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../my-element-openwc-vitejs.js';

describe('MyElementOpenwcVitejs', () => {
  it('has a default heading "Hey there" and counter 5', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`
    );

    expect(el.heading).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`
    );
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the heading via attribute', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs
        heading="attribute heading"
      ></my-element-openwc-vitejs>`
    );

    expect(el.heading).to.equal('attribute heading');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});

describe('MyElementOpenwcVitejs DUPLICATE Fail - Skip', () => {
  it.skip('has a default heading "Hey there" and counter 5', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`
    );

    expect(el.heading).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`
    );
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(16);
  });

  it('can override the heading via attribute', async () => {
    const el = await fixture(
      html`<my-element-openwc-vitejs
        heading="attribute heading"
      ></my-element-openwc-vitejs>`
    );

    expect(el.heading).to.equal('attribute heading');
  });
});
