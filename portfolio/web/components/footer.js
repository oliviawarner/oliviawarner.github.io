class Footer extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        Olivia Warner &copy 2022
                    </p>
                </div>
            </footer>
            `;
    }
}
customElements.define('footer-component', Footer);