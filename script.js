
// $(document).ready(function() {
//     // Existing hover effects
//     $('.grid-item').hover(
//         function() {
//             $(this).css('box-shadow', '0 10px 30px rgba(0,0,0,0.5)');
//         },
//         function() {
//             $(this).css('box-shadow', 'none');
//         }
//     );


// });

$(document).ready(function() {
    let hasAnimated = false;
    const staticImage = 'IMG/logos/illu2.png';
    const animatedGif = 'IMG/GIF/illu2_anim.gif';
    
    $('.hero-section').hover(
        function() {
            // On hover - show GIF
            $('#hero-image').attr('src', animatedGif + '?t=' + new Date().getTime());
        },
        function() {
            // On mouse leave - go back to static image
            $('#hero-image').attr('src', staticImage);
        }
    );
});