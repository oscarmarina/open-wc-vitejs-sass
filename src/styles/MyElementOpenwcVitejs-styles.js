import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: 2rem;
    color: var(--my-element-openwc-vitejs-text-color, white);
    background-color: rgba(72, 133, 97, 0.86);
    box-shadow: inset 0 0 0 1em rgba(15, 92, 92, 0.68);
  }

  span ::slotted(*) {
    color: #adef06;
  }
`;
