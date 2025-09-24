
class MicroFrontend2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // shadow DOM enabled!
    this.shadowRoot.innerHTML = '<p><em>Hello from micro-frontend-2</em></p>';
  }
}

customElements.define('micro-frontend-2', MicroFrontend2);