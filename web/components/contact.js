$(document).ready(function() {
        emailjs.init('TESEuE_vHOK9dI3xH');
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_wedvjoh', 'template_f4sdf1v', this)
                .then(function() {
                    $('#success_send').removeClass('visually-hidden');
                    $('#error_send').addClass('visually-hidden');
                }, function(error) {
                    $('#success_send').addClass('visually-hidden');
                    $('#error_send').removeClass('visually-hidden');
                });
        });

        $('#close_success_send').click(function() {
            $('#success_send').addClass('visually-hidden');
        });
        
        $('#close_error_send').click(function() {
            $('#error_send').addClass('visually-hidden');
        });  
});

