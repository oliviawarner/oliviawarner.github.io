class Cover extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <h1>Cover<h1>
            `;
    }
}
customElements.define('cover-component', Cover);