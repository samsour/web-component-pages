import { html } from 'lit-html';
import './ExampleView.js';

export default {
  title: 'views/ExampleView/Default',
  component: 'wcp-example-view',
  argTypes: {},
};

function Template() {
  return html` <wcp-example-view></wcp-example-view> `;
}

export const Default = Template.bind();
