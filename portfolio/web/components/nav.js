class Nav extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <nav class="navbar is-primary">
                
            </nav>
            `;
    }
}
customElements.define('nav-component', Nav);