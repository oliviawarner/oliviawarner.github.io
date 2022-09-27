class About extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="row">
                <div class="col pt-5" id="profile">
                    <img src="../imgs/profile_square.jpg" alt="Olivia Warner Profile" width="500" height="500" id="profile" style="z-index:1;">
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_czci5s6k.json"  background="transparent"  speed="1"  style="width: 800px; height: 800px; margin-top:-670px; z-index:-1;"  loop  autoplay></lottie-player>
                </div>
                <div class="col" id="about-header">
                    <h1 class="fw-bold">About Me</h1>
                </div>
            </div>
            `;
    }
}
customElements.define('about-component', About);