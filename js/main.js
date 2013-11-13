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

function swapVid(bool) {
    var frame = document.getElementById('frame');

    fadeOut(frame);
    setTimeout( function () {
        if(bool) {
            frame.src = "http://www.youtube.com/embed/P9S1dn9_0_8?showinfo=0&amp;autohide=1";
        } else {
            frame.src = "http://www.youtube.com/embed/z0p6OXS30Gw?showinfo=0&amp;autohide=1";
        }
    }, 400);
    setTimeout( function () {
        fadeIn(frame);
    }, 700);
    clearTimeout();
}

function slide(dir, position) {
    var target = document.getElementById('landing');

    //Slide that shizz
    if(dir)  target.style.marginTop  = (450 * position) + 'px';
    if(!dir) target.style.marginLeft = (920 * position) + 'px';
}

$(document).ready( function () {
    var bool = true;

    $('nav li, .load').click( function (e) {
        e.preventDefault();
    });

    // Load the fit guide
    $('.load').on('click', function () {
        if(bool) {
            $('#container').removeClass('show');
            $('#title, #loadContainer').addClass('show');
        } else {
            $('#title, #loadContainer').removeClass('show');
            $('#container').addClass('show');
        }
        bool = !bool;
    });
});