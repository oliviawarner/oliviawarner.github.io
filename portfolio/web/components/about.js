class About extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="row">
                <div class="col pt-5" id="profile">
                <img src="../imgs/profile_square.jpg" alt="Olivia Warner Profile" width="500" height="500" id="profile"> 
                </div>
                <div class="col" id="about-header">
                    <h1 class="fw-bold">About Me</h1>
                </div>
            </div>
            `;
    }
}
customElements.define('about-component', About);