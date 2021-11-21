/* eslint-disable no-unused-vars */
import { css } from 'lit';

export default css`
  :host {
    display: block;
    box-sizing: border-box;
    color: forestgreen;
    font-size: 44px;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    white-space: nowrap;
  }
`;
