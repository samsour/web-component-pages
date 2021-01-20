import { html } from 'lit-html';
import '../src/forms-2021.js';

export default {
  title: 'Forms2021',
  component: 'forms-2021',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <forms-2021
      style="--forms-2021-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </forms-2021>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
