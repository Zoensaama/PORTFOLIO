$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.gallery-image');
    const descriptions = $('.description-item');  // ADD THIS LINE
    const totalImages = images.length;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active');
        descriptions.removeClass('active');  // ADD THIS LINE
        descriptions.eq(index).addClass('active');  // ADD THIS LINE
    }

    $('.right-arrow').click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    $('.left-arrow').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    // Keyboard navigation
    $(document).keydown(function(e) {
        if (e.key === 'ArrowRight') {
            $('.right-arrow').click();
        } else if (e.key === 'ArrowLeft') {
            $('.left-arrow').click();
        }
    });
});