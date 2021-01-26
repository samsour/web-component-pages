import { LitElement, html, css } from 'lit-element';

class ${name} extends LitElement {
  static get styles() {
    return [
      css\`
        /* Styling */
    \`,
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
    return html\`
    <p>${name} works!</p>
    \`;
  }
}

customElements.define('${tag}', ${name});
