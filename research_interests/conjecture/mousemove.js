// script.js

document.addEventListener('mousemove', function (event) {
    const bar = document.querySelector('.next-page-bar');
    const rightEdgeThreshold = 100; // distance from right edge to trigger the arrow

    if (window.innerWidth - event.clientX < rightEdgeThreshold) {
        bar.style.right = '0';
        bar.style.opacity = '1';
    } else {
        bar.style.right = '-50px';
        bar.style.opacity = '0';
    }
});