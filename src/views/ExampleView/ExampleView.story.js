import { html } from 'lit-html';
import './ExampleView.js';

export default {
  title: 'Views',
  component: 'example-view',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <example-view
      style="--forms-2021-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </example-view>
  `;
}

export const ExampleView = Template.bind({});
ExampleView.args = {
  title: 'My app',
};
