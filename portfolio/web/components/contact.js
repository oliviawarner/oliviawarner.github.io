class Contact extends HTMLElement {
    constructor() {
        super();
    }
        connectedCallback() {
            this.innerHTML = `
            <div class="container col-xl-10 col-xxl-8 vh-100" id="contact">
            <div class="row align-items-center g-lg-5 py-5">
                <h1 class="display-4 fw-bold lh-1 mb-3" style="text-align:center">Contact Me</h1>
              <div class="col-lg-7 mx-auto col-lg-7">
                <form class="p-4 p-md-5 border rounded-3 bg-light" id="contact-form">
                <input type="hidden" class="form-control" name="contact_number">
                <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Name" name="user_name">
                <label for="floatingName">Name</label>
                </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="Email" name="user_email">
                    <label for="floatingEmail">Email Address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" id="floatingMessage" rows="4" placeholder="Message" style="height:100%" name="user_message"></textarea>
                    <label for="floatingMessage">Message</label>
                  </div>
                  <button class="w-100 btn btn-lg btn-warning" type="submit" id="send_message_btn">Send Message</button>
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

$(document).ready(function() {
        emailjs.init('TESEuE_vHOK9dI3xH');
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_wedvjoh', 'template_f4sdf1v', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    
    });