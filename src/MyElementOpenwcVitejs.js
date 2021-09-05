import { html, LitElement } from 'lit';
import styles from  './styles/MyElementOpenwcVitejs-styles.js'

export class MyElementOpenwcVitejs extends LitElement {
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
      <h2>${this.heading} : <slot></slot> ${this.counter}</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
