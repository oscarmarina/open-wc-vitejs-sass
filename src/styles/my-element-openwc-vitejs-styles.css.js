/* eslint-disable no-unused-vars */
import { css } from 'lit';

export const styles = css`:host {
  display: block;
  box-sizing: border-box;
  padding: 1rem;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`;
