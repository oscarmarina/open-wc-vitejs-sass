import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';

import { MyElementOpenwcVitejs } from '../src/MyElementOpenwcVitejs.js';

import '../define/my-element-openwc-vitejs.js';

suite('MyElementOpenwcVitejs', () => {
  let el: MyElementOpenwcVitejs;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = (await fixture(html`
        <my-element-openwc-vitejs>light-dom</my-element-openwc-vitejs>
      `)) as MyElementOpenwcVitejs;
      await el.updateComplete;
    });

    test('has a default heading "Hey there" and counter 5', () => {
      assert.equal(el.heading, 'Hey there');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el);
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el);
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = (await fixture(html`
        <my-element-openwc-vitejs></my-element-openwc-vitejs>
      `)) as MyElementOpenwcVitejs;
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      const button = el.shadowRoot!.querySelector('button')!;
      button.click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = (await fixture(html`
        <my-element-openwc-vitejs heading="attribute heading"></my-element-openwc-vitejs>
      `)) as MyElementOpenwcVitejs;
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
