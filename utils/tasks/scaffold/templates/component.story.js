import { html } from 'lit-html';
import './${name}.js';

export default {
  title: '${type}s/${name}/Default',
  component: '${tag}',
  argTypes: {},
};

function Template() {
  return html\` <${tag}></${tag}> \`;
}

export const Default = Template.bind();
