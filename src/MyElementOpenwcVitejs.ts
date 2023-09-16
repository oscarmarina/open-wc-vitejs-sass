import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles/my-element-openwc-vitejs-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-2.0.0-blue)
 *
 * # OPEN-WC & VITEJS & SCSS

 * ## Example generated using
 * - #### [npm init @blockquote/wc](https://github.com/oscarmarina/create-wc)
 *
 * #### Demo online:
 * - [https://sharp-fermi-2f88f5.netlify.app](https://sharp-fermi-2f88f5.netlify.app)
 * - [stackblitz - open-wc-vitejs-sass](https://stackblitz.com/github/oscarmarina/open-wc-vitejs-sass)
 * ---
 * #### `<my-element-openwc-vitejs>`
 *
 * An example element.
 *
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class MyElementOpenwcVitejs extends LitElement {
  static override styles = [styles];

  /**
   * The heading to say "Hello" to.
   */
  @property({ type: String })
  heading = 'Hey there';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  counter = 5;

  override render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <button @click=${this.#onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
    `;
  }

  #onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counterchange', { detail: this.counter }));
  }

  /**
   * Formats a greeting
   * @param heading The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading: string): string {
    return `Hello, ${heading}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element-openwc-vitejs': MyElementOpenwcVitejs;
  }
}
