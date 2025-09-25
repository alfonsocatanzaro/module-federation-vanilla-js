export class MegaButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // shadow DOM enabled!
    this.shadowRoot.innerHTML = '<button style="border: 1ps solid green; background-color: pink;">Mega Buttone</button>';
  }
}
