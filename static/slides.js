let revealHeader = document.querySelector('#reveal-header');
Reveal.initialize({
    controls: true,
    progress: true,
    hash: true,
    disableLayout: true,
    plugins: [ RevealNotes ],
});
Reveal.addEventListener('slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.currentSlide.dataset.header) {
        revealHeader.innerHTML = event.currentSlide.dataset.header;
    } else {
        revealHeader.innerHTML = null;
    }
});