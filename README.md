![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

# OPEN-WC & VITEJS & SCSS

## Example generated using
- #### [npm init @blockquote/wc](https://github.com/oscarmarina/create-wc)

#### Demo online:
- [https://sharp-fermi-2f88f5.netlify.app](https://sharp-fermi-2f88f5.netlify.app)
- [stackblitz - open-wc-vitejs-sass](https://stackblitz.com/github/oscarmarina/open-wc-vitejs-sass)
---
#### `<my-element-openwc-vitejs>`

An example element.


### `src/MyElementOpenwcVitejs.ts`:

#### class: `MyElementOpenwcVitejs`, `my-element-openwc-vitejs`

##### Fields

| Name      | Privacy | Type     | Default       | Description                                      | Inherited From |
| --------- | ------- | -------- | ------------- | ------------------------------------------------ | -------------- |
| `heading` |         | `string` | `'Hey there'` | The heading to say "Hello" to.                   |                |
| `counter` |         | `number` | `5`           | The number of times the button has been clicked. |                |

##### Methods

| Name       | Privacy | Description        | Parameters        | Return   | Inherited From |
| ---------- | ------- | ------------------ | ----------------- | -------- | -------------- |
| `#onClick` |         |                    |                   |          |                |
| `sayHello` |         | Formats a greeting | `heading: string` | `string` |                |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `heading` | heading |                |
| `counter` | counter |                |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<hr/>

#### Exports

| Kind | Name                    | Declaration           | Module                       | Package |
| ---- | ----------------------- | --------------------- | ---------------------------- | ------- |
| `js` | `MyElementOpenwcVitejs` | MyElementOpenwcVitejs | src/MyElementOpenwcVitejs.ts |         |

### `src/styles/my-element-openwc-vitejs-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                            | Package |
| ---- | -------- | ----------- | ------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/my-element-openwc-vitejs-styles.css.ts |         |

### `define/my-element-openwc-vitejs.ts`:

#### Exports

| Kind                        | Name                       | Declaration           | Module                        | Package |
| --------------------------- | -------------------------- | --------------------- | ----------------------------- | ------- |
| `custom-element-definition` | `my-element-openwc-vitejs` | MyElementOpenwcVitejs | /src/MyElementOpenwcVitejs.js |         |
