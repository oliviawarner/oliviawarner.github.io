class About extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
              <img src="../imgs/profile_square.jpg" alt="Olivia Warner Profile" width="500" height="500" id="profile" style="z-index:1;">
              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_czci5s6k.json"  background="transparent"  speed="1"  style="width: 800px; height: 800px; margin-top:-670px; margin-left:-75px; z-index:-1;"  loop  autoplay></lottie-player>
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">About Me</h1>
                <p class="lead">I am a developer and designer from Pittsburgh, Pennsylvania.</p>

                <!--Socials-->
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
            `;
    }
}
customElements.define('about-component', About);