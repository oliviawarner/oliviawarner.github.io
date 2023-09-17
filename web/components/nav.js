$(document).ready(function() {
  //Hashnode Blog
  $('#nav_blog_btn').click(function () {
    window.open('https://oliviawarner.hashnode.dev/', '_blank');
  });

  $('#nav_brand').click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  $('#nav_about').click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }); 


  $(document).ready(function() {
    function setVhHeight() {
      var windowHeight = $(window).height();
      $('.vh-100').css('min-height', windowHeight);
    }
  
    // Attach a click event handler to the links in the navbar
    $('.navbar-nav a').on('click', function(event) {
      // Check if a hash has been added to the URL
      if (window.location.hash) {
        setVhHeight(); // Call the function to adjust the height
      }
    });
  
    // Optionally, you can also call the function on page load
    setVhHeight();
  
    $(window).resize(function() {
      setVhHeight();
    });
  });
  
});