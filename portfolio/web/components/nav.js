class Nav extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="container sticky-top">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none font-monospace fs-5 fw-bold">
              Olivia Warner
              </a>
        
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Work</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Contact</a></li>
              </ul>
        
              <div class="col-md-3 text-end">
                <button type="button" class="btn btn-light" id="blog_btn">Blog</button>
              </div>
            </header>
          </div>
            `;
    }
}
customElements.define('nav-component', Nav);