$(function() {

    // onload
    if(document.body.clientWidth >= 768) {
        $('video').attr('autoplay', true);
    }

    // If you want to autoplay when the window is resized wider than 780px
    // after load, you can add this:

    $(window).resize(function() {
        if(document.body.clientWidth >= 768) {
            $('video').attr('autoplay', true);
        }
    });
});
