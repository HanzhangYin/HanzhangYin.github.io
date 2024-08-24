// script.js

document.addEventListener('mousemove', function (event) {
    const arrow = document.querySelector('.next-page-bar');
    const rightEdgeThreshold = 100; // distance from right edge to trigger the arrow

    if (window.innerWidth - event.clientX < rightEdgeThreshold) {
        arrow.style.right = '10px';
        arrow.style.opacity = '1';
    } else {
        arrow.style.right = '-50px';
        arrow.style.opacity = '0';
    }
});