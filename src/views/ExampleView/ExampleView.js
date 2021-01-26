import { LitElement, html, css } from 'lit-element';
import '../../components/ExampleComponent/ExampleComponent.js';

class ExampleView extends LitElement {
  static get styles() {
    return [
      css`
        /* Styling */
      `,
    ];
  }

  static get properties() {
    return {
      propertyName: 'value',
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <p>ExampleView works!</p>
      <wcp-example-component></wcp-example-component>
    `;
  }
}

customElements.define('wcp-example-view', ExampleView);
