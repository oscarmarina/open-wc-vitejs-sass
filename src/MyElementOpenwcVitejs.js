import { html, LitElement } from 'lit';
import styles from './styles/MyElementOpenwcVitejs-styles.js';

/**
![Lit](https://img.shields.io/badge/lit-2.0.0-blue)
*/

export class MyElementOpenwcVitejs extends LitElement {
  static get is() {
    return 'my-element-openwc-vitejs';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      heading: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>
        ${this.heading} ( <span><slot></slot></span> ) ${this.counter}
      </h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
