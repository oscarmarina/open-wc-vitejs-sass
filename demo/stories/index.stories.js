import { html } from 'lit';
import '../../define/my-element-openwc-vitejs.js';

export default {
  title: 'my-element-openwc-vitejs',
  component: 'my-element-openwc-vitejs',
  argTypes: {
    onCounterChanged: { action: 'onCounterChanged' },
    heading: { control: 'text' },
    counter: { control: 'number' },
  },
};

function Template({ heading = 'world', counter = 5, slot, onCounterChanged }) {
  return html`
    <my-element-openwc-vitejs
      @counter-changed="${onCounterChanged}"
      .heading=${heading}
      .counter=${counter}
    >
      ${slot}
    </my-element-openwc-vitejs>
  `;
}

export const Default = Template.bind({});

export const CustomHeading = Template.bind({});
CustomHeading.args = {
  heading: 'My heading',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

const slotArgTypes = 'content';
export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted ${slotArgTypes}</p>`,
};

/* SlottedContent.argTypes = {
  slot: { table: { disable: true } },
}; */
