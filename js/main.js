function fadeIn(target) {
    target.style.opacity = 1;
    target.style.filter  = "alpha(opacity=100)";
}

function fadeOut(target) {
    target.style.opacity = 0;
    target.style.filter  = "alpha(opacity=0)";
}

function pageLoad() {
    var target = document.getElementById('container');
    fadeIn(target);
}

function slide(position) {
    var travel = (450 * position) + 'px';
    var target = document.getElementById('landing');
    //Slide that shizz
    target.style.marginTop = travel;

    // Pause youtube video when closing div
    // var iframe = document.getElementById('frame').contentWindow;
    // iframe.pauseVideo();
}

$(document).ready( function () {
    //Remove click events
    $('.nav li').on('click', 'a', function (e) {
        e.preventDefault();
    });

    //Load the fit guide
    $('.load').on('click', function () {
        var link   = $(this).attr('href');
        var target = document.getElementById('container');

        fadeOut(target);
        $('#container').load(link, function() {
            $(this).css('height', '600px');
            fadeIn(target);
        });
    });
});