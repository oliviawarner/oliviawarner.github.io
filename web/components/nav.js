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


// Function to update the dark mode icon based on the mode
function updateDarkModeIcon(isDarkMode) {
  const darkModeIcon = document.getElementById("dark_mode_icon");
  if (isDarkMode) {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
    darkModeIcon.title = "Light Mode";
  } else {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
    darkModeIcon.title = "Dark Mode";
  }
}

// Initially, set the icon based on whether the page is in dark mode or not
const isDarkModeInitially = $('body').hasClass('dark-mode');
updateDarkModeIcon(isDarkModeInitially);

// Click event handler for the dark mode toggle button
$('#dark_mode_toggle_btn').click(function () {
  // Toggle the dark mode class on the body element
  $('body').toggleClass('dark-mode');
  // Update the icon based on the new mode
  const isDarkMode = $('body').hasClass('dark-mode');
  updateDarkModeIcon(isDarkMode);
});
  
});