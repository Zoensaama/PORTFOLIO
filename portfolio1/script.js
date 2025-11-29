
$(document).ready(function() {
    // Additional jQuery effects can be added here
    $('.grid-item').hover(
        function() {
            $(this).css('box-shadow', '0 10px 30px rgba(0,0,0,0.5)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );
});
