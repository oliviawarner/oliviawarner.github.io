class Nav extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">
                    Olivia Warner
                    </a>
                        <div class="collapse navbar-collapse" id="navBar">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://oliviawarner.hashnode.dev/">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
            `;
    }
}
customElements.define('nav-component', Nav);