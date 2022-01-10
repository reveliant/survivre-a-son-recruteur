let revealHeader = document.querySelector('#reveal-header');
let params = new URLSearchParams(document.location.search);
Reveal.initialize({
    controls: true,
    progress: true,
    hash: true,
    disableLayout: true,
    plugins: [ RevealNotes ],
    showNotes: ! params.has("hideNotes"),
});
Reveal.addEventListener('slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.currentSlide.dataset.header) {
        revealHeader.innerHTML = event.currentSlide.dataset.header;
    } else {
        revealHeader.innerHTML = null;
    }
});