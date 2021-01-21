import { html } from 'lit-html';
import '../src/views/ExampleView/ExampleView.js';

export default {
  title: 'Example View',
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

export const Component = Template.bind({});
Component.args = {
  title: 'My app',
};
