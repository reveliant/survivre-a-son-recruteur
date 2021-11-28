let revealHeader = document.querySelector('#reveal-header');
Reveal.initialize({
    width: "70%",
    controls: true,
    progress: true,
    center: true,
    hash: true,
});
Reveal.addEventListener('slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.currentSlide.dataset.header) {
        revealHeader.innerHTML = event.currentSlide.dataset.header;
    } else {
        revealHeader.innerHTML = null;
    }
});