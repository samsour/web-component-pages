import { LitElement, html, css } from 'lit-element';

class ExampleComponent extends LitElement {
  static get styles() {
    return [
      css`
        /* Styling */
    `,
    ];
  }

  static get properties() {
    return { 
      propertyName: 'value'
    };
  }

  constructor() {
    super();
  }
  
  render() {
    return html`
    <p>ExampleComponent works!</p>
    `;
  }
}

customElements.define('wcp-example-component', ExampleComponent);
