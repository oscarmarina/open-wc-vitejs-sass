import { html, LitElement } from 'lit';
import { styles } from './styles/my-element-openwc-vitejs-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue)
 *
 * # OPEN-WC & VITEJS & SCSS
 * ## Example generated using
 * - #### [npm init @blockquote/wc](https://github.com/oscarmarina/create-wc)
 *
 * > Differences with the original template:
 * > - [Add tsconfig.json](https://humanwhocodes.com/snippets/2020/10/create-typescript-declarations-from-javascript-jsdoc/)
 *     - Update `build:`script and add `build:tsc` script
 * > - [Add Lit 3.0](https://lit.dev/blog/2023-10-10-lit-3.0/)
 * > - [Add dependencies `typescript and tslib`](https://www.typescriptlang.org/)
 * > - Add a `clean: script` to package.json
 *
 * #### Demo online:
 * - [https://sharp-fermi-2f88f5.netlify.app](https://sharp-fermi-2f88f5.netlify.app)
 * - [stackblitz - open-wc-vitejs-sass](https://stackblitz.com/github/oscarmarina/open-wc-vitejs-sass)
 * <br>
 *
 * ##### TypeScript example - branch: `feature/typescript`
 * ---
 *
 * #### `<my-element-openwc-vitejs>`
 * An example element.
 *
 * @attribute heading
 * @attribute counter
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class MyElementOpenwcVitejs extends LitElement {
  /**
   * @override
   */
  static styles = [styles];

  /**
   * @override
   */
  static properties = {
    /**
     * The heading to say "Hello" to.
     */
    heading: { type: String },

    /**
     * The number of times the button has been clicked.
     */
    counter: { type: Number },
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  /**
   * @override
   */
  render() {
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
   * @param heading {string} The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
