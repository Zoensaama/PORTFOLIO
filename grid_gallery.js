$(document).ready(function() {
    const images = $('.gallery-item img');
    let currentIndex = 0;

    // Open lightbox when clicking on an image
    $('.gallery-item').click(function() {
        currentIndex = $(this).index();
        showLightbox(currentIndex);
    });

    // Close lightbox
    $('.lightbox-close').click(function(e) {
        e.stopPropagation();
        $('.lightbox').removeClass('active');
    });

    $('.lightbox').click(function(e) {
        if (e.target === this) {
            $('.lightbox').removeClass('active');
        }
    });

    // Navigate to next image
    $('.nav-arrow.right-arrow').click(function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    });

    // Navigate to previous image
    $('.nav-arrow.left-arrow').click(function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    });

    // Keyboard navigation
    $(document).keydown(function(e) {
        if ($('.lightbox').hasClass('active')) {
            if (e.key === 'ArrowRight') {
                $('.nav-arrow.right-arrow').click();
            } else if (e.key === 'ArrowLeft') {
                $('.nav-arrow.left-arrow').click();
            } else if (e.key === 'Escape') {
                $('.lightbox').removeClass('active');
            }
        }
    });

    function showLightbox(index) {
        const imgSrc = images.eq(index).attr('src');
        $('.lightbox-content img').attr('src', imgSrc);
        $('.lightbox').addClass('active');
    }
});