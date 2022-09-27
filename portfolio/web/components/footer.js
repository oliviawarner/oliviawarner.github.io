class Footer extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            `;
    }
}
customElements.define('footer-component', Footer);