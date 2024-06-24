import {LitElement, html, css} from 'lit';
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  render() {
    return html`
      <h1>Page!</h1>
      <p>texte de test</p>
      <slot></slot>
    `;
  }

}

window.customElements.define('my-element', MyElement);
