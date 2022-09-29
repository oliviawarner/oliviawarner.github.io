class Contact extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
                <h1 class="display-4 fw-bold lh-1 mb-3" style="text-align:center">Contact Me</h1>
              <div class="col-lg-7 mx-auto col-lg-7">
                <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Name">
                <label for="floatingName">Name</label>
                </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="Email">
                    <label for="floatingEmail">Email Address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" id="floatingMessage" rows="6" placeholder="Message" style="height:100%"></textarea>
                    <label for="floatingMessage">Message</label>
                  </div>
                  <button class="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
                  <hr class="my-4">
                  <small class="text-muted">By clicking Send Message, a message will be sent to me directly</small>
                </form>
              </div>
            </div>
          </div>
            `;
        }
    }
    customElements.define('contact-component', Contact);