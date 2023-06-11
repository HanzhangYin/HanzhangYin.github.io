window.addEventListener('hashchange', function() {
    // Remove the highlight from all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('highlight');
    });

    // Get the new hash
    let hash = window.location.hash;

    // Add the highlight to the new section
    let section = document.querySelector(hash);
    if (section) {
        section.classList.add('highlight');

        // Remove the highlight after 2 seconds
        setTimeout(function() {
            section.classList.remove('highlight');
        }, 1000);  // 1000 milliseconds = 1 seconds
    }
});


