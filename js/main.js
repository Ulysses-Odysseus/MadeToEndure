function fadeIn(target) {
    target.style.opacity = 1;
    target.style.filter  = "alpha(opacity=100)";

}

function load() {
    var target = document.getElementById('container');
    fadeIn(target);
}

function toggleVideo(scroll) {
    var counter = '-450px';
    var target  = document.getElementById('landing');

    if(scroll){
        target.style.marginTop = 0;
    } else {
        target.style.marginTop = counter;
    }
    return false;
}