window.addEventListener('load', function () {
      document.getElementById('tooltip-link').addEventListener('mouseover', function(e) {
        var tooltipText = document.getElementById('tooltip-text');
        var tooltipLink = document.getElementById('tooltip-link');
        var rect = tooltipLink.getBoundingClientRect();
        var tooltipWidth = tooltipText.offsetWidth;

        if(rect.left + tooltipWidth / 2 > window.innerWidth) {
          tooltipText.style.left = 'auto';
          tooltipText.style.right = '0';
        } else if(rect.right - tooltipWidth / 2 < 0) {
          tooltipText.style.left = '0';
          tooltipText.style.right = 'auto';
        } else {
          tooltipText.style.left = '50%';
          tooltipText.style.right = 'auto';
          tooltipText.style.marginLeft = -tooltipWidth / 2 + 'px';
        }
    });
});

