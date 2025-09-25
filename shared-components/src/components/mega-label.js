export class MegaLabel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // shadow DOM enabled!
    this.shadowRoot.innerHTML = '<label style="border: 1px solid red; background-color: green;">Mega Label</label>';
  }
}
