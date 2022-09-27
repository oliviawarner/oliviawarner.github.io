class Cover extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
                <div class="container-fluid" style="height:100vh">
                    <div class="title-content">
                        <h1>Olivia</h1>
                        <h1>Olivia</h1>
                    </div>
                </div>
            `;
    }
}
customElements.define('cover-component', Cover);