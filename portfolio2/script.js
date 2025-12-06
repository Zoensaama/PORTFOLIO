
$(document).ready(function() {
    // Existing hover effects
    $('.grid-item').hover(
        function() {
            $(this).css('box-shadow', '0 10px 30px rgba(0,0,0,0.5)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );

    // ADD THIS NEW CODE:
    // Check if user has visited before in this session
//     if (sessionStorage.getItem('visited')) {
//         $('.hero-section').addClass('no-animation');
//     } else {
//         sessionStorage.setItem('visited', 'true');
//     }
});