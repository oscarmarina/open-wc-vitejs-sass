import { html, fixture, assert, expect, fixtureCleanup } from '@open-wc/testing';
import '../define/my-element-openwc-vitejs.js';

suite('MyElementOpenwcVitejs', () => {
  /**
   * @type {import('../index').MyElementOpenwcVitejs}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`<my-element-openwc-vitejs>light-dom</my-element-openwc-vitejs>`);
      await el.updateComplete;
    });

    test('has a default heading "Hey there" and counter 5', () => {
      assert.equal(el.heading, 'Hey there');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = await fixture(html`<my-element-openwc-vitejs></my-element-openwc-vitejs>`);
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      el.shadowRoot?.querySelector('button')?.click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = await fixture(
        html`<my-element-openwc-vitejs heading="attribute heading"></my-element-openwc-vitejs>`,
      );
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
