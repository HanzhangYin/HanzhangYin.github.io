<script>
  // Select all the links in the navbar
  var navLinks = document.querySelectorAll('.navbar a');

  // For each link, add a click event
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // When a link is clicked, uncheck the checkbox
      document.getElementById('nav-toggle').checked = false;
    });
  });
</script>
