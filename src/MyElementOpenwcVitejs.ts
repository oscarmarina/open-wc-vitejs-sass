import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './styles/MyElementOpenwcVitejs-styles.js';

export class MyElementOpenwcVitejs extends LitElement {
  static get is() {
    return 'my-element-openwc-vitejs';
  }

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
      <button @click=${this._onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
    `;
  }

  private _onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counter-changed'));
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
