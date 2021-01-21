import { html } from 'lit-html';
import './ConditionalRendering.js';

export default {
  title: 'Components',
  component: 'conditonal-rendering',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <conditional-rendering
      style="--forms-2021-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </conditional-rendering>
  `;
}

export const ConditionalRendering = Template.bind({});
ConditionalRendering.args = {
  title: 'My app',
};
