import { html } from 'lit-html';
import './ExampleComponent.js';

export default {
  title: 'components/ExampleComponent/Default',
  component: 'wcp-example-component',
  argTypes: {},
};

function Template() {
  return html` <wcp-example-component></wcp-example-component> `;
}

export const Default = Template.bind();
