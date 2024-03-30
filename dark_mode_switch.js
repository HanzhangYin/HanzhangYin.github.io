
// document.getElementById('dark-mode-toggle').addEventListener('change', function(event) {
//     document.body.classList.toggle('dark-mode', event.target.checked);
// });

const toggle = document.getElementById('dark-mode-toggle');
    const label = document.getElementById('dark-mode-label');

    const savedState = localStorage.getItem('dark-mode') === 'true';
    toggle.checked = savedState;
    document.body.classList.toggle('dark-mode', savedState);
    label.textContent = savedState ? '☀️' : '🌙';

    toggle.addEventListener('change', function(event) {
        const isChecked = event.target.checked;
        document.body.classList.toggle('dark-mode', isChecked);
        localStorage.setItem('dark-mode', isChecked);
        label.textContent = isChecked ?  '☀️' : '🌙';
    });
