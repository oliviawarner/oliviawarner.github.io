class Cover extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            `;
    }
}
customElements.define('cover-component', Cover);