// Assuming you have a switch on your page to toggle dark mode on or off
// let darkModeSwitch = document.getElementById('dark-mode-switch');

// darkModeSwitch.addEventListener('change', function() {
//     document.body.classList.toggle('dark-mode', this.checked);
// });

document.getElementById('dark-mode-toggle').addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode', event.target.checked);
});
