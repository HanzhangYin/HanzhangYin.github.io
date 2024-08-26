function openNav() {
    if (window.innerWidth > 768) {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        document.getElementById("mySidenav").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Condition: When a link is clicked, the script checks if the screen width is 768px or less (indicating a phone screen).
// If so, it triggers the closeNav() function to close the sidebar.
document.querySelectorAll('#mySidenav a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Only close on smaller screens
            closeNav();
        }
    });
});