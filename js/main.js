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
    return false;
}

var scroll = true;

function toggleVideo() {
    var travel = '-450px';
    var target = document.getElementById('landing');

    if(scroll){
        target.style.marginTop = 0;
    } else {
        target.style.marginTop = travel;
    }
    scroll = !scroll;
    return false;
}

$(document).ready( function () {
    $('.load').on('click', function (e) {
        e.preventDefault();

        var link   = $(this).attr('href');
        var target = document.getElementById('container');

        fadeOut(target);
        $('#container').load(link, function() {
            fadeIn(target);
        });
    });
});